const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'src/assets/fotos';

  console.log('🚀 Optimizando imágenes con Sharp...');

  const files = fs.readdirSync(inputDir).filter(file =>
    file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
  );

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, `temp_${file}`);

    try {
      const originalSize = fs.statSync(inputPath).size;

      // Comprimir la imagen
      await sharp(inputPath)
        .jpeg({ quality: 80, progressive: true }) // JPEG con 80% calidad
        .resize(1920, 1080, { // Máximo 1920x1080, manteniendo aspect ratio
          fit: 'inside',
          withoutEnlargement: true
        })
        .toFile(outputPath);

      const optimizedSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

      // Reemplazar archivo original
      fs.renameSync(outputPath, inputPath);

      console.log(`  ✓ ${file}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (${reduction}% reducción)`);

    } catch (error) {
      console.error(`  ❌ Error procesando ${file}:`, error.message);
      // Limpiar archivo temporal si existe
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
    }
  }

  console.log('\n🎉 ¡Optimización completada!');
}

optimizeImages().catch(console.error);