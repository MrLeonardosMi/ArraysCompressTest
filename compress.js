function compress(numbers) {
  numbers.sort((a, b) => a - b);
  const sequences = [];
  let currentSeq = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1] + 1)
      currentSeq.push(numbers[i]);
    else {
      if (currentSeq.length > 0)
        sequences.push(currentSeq);
      currentSeq = [numbers[i]];
    }
  }
  sequences.push(currentSeq);

  return sequences.map(seq =>seq.length === 1 ? seq[0].toString() : `${seq[0]}-${seq[seq.length - 1]}`).join(',');
}

function decompress(str) {
  if (!str)
    return [];

  const numbers = [];
  const parts = str.split(',');

  for (const part of parts) {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(Number);
      for (let i = start; i <= end; i++)
        numbers.push(i);
    } else
      numbers.push(Number(part));
  }

  return numbers;
}

module.exports = { compress, decompress };