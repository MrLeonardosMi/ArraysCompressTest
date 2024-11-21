const { compress, decompress } = require('./compress');

function runTest(testName, numbers) {
  const original = numbers.join(',');
  const compressed = compress(numbers);
  const decompressed = decompress(compressed);

  const originalSize = original.length;
  const compressedSize = compressed.length;
  const ratio = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);

  console.log(`\nТест: ${testName}`);
  console.log(`Исходный размер: ${originalSize}`);
  console.log(`Сжатый размер: ${compressedSize}`);
  console.log(`Коэффициент сжатия: ${ratio}%`);
  console.log(`Корректность: ${JSON.stringify(numbers.sort((a, b) => a - b)) === JSON.stringify(decompressed.sort((a, b) => a - b))}`);
}

function generateRandom(count) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 300) + 1);
}

runTest('Простой', [1, 2, 3, 5, 7, 8, 9]);
runTest('50 случайных чисел', generateRandom(50));
runTest('100 случайных чисел', generateRandom(100));
runTest('500 случайных чисел', generateRandom(500));
runTest('1000 случайных чисел', generateRandom(1000));

const singleDigits = Array.from({ length: 9 }, (_, i) => i + 1);
runTest('Однозначные числа', singleDigits);

const doubleDigits = Array.from({ length: 90 }, (_, i) => i + 10);
runTest('Двузначные числа', doubleDigits);

const tripleDigits = Array.from({ length: 201 }, (_, i) => i + 100);
runTest('Трехзначные числа', tripleDigits);

const repeatingNumbers = Array.from({ length: 300 }, (_, i) => Math.floor(i / 3) + 1);
runTest('Числа с повторениями', repeatingNumbers);