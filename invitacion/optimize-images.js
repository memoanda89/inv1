const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'src/assets/fotos';
  const outputDir = 'src/assets/fotos/optimized';

  // Crear directorio de salida si no existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Optimizando imágenes...');

  const files = await imagemin([`${inputDir}/*.{jpg,jpeg,png}`], {
    destination: outputDir,
    plugins: [
      imageminJpegtran(), // Comprimir JPEG
      imageminPngquant({
        quality: [0.6, 0.8] // Comprimir PNG entre 60-80% calidad
      })
    ]
  });

  console.log(`✅ Optimizadas ${files.length} imágenes:`);
  files.forEach(file => {
    const originalPath = file.sourcePath.replace(outputDir, inputDir);
    const originalSize = fs.statSync(originalPath).size;
    const optimizedSize = fs.statSync(file.destinationPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`  ${path.basename(file.sourcePath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (${reduction}% reducción)`);
  });

  // Mover archivos optimizados al directorio original
  console.log('\n📁 Moviendo archivos optimizados...');
  files.forEach(file => {
    const originalPath = file.sourcePath.replace('optimized/', '');
    fs.copyFileSync(file.destinationPath, originalPath);
    console.log(`  ✓ ${path.basename(file.sourcePath)}`);
  });

  // Limpiar directorio temporal
  fs.rmSync(outputDir, { recursive: true, force: true });
  console.log('\n🎉 ¡Optimización completada!');
}

optimizeImages().catch(console.error);