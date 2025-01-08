export function revRot(s: string, sz: number): string {
  if (sz <= 0 || sz > s.length) return "";

  const chunks: string[] = [];

  for (let i = 0; i < Math.floor(s.length / sz); i++) {
    chunks.push(s.slice(sz * i, sz * i + sz));
  }

  const mappedChunks = chunks.map((chunk) => {
    return chunk
      .split("")
      .map((el) => Number(el))
      .reduce((acc, next) => (acc += next), 0);
  });

  const result = chunks.map((chunk, idx) => {
    const resultedChunkReduced = mappedChunks[idx];

    if (resultedChunkReduced % 2 === 0)
      return chunk.split("").reverse().join("");

    let tempChunk = chunk.split("");

    let first = chunk[0];

    for (let i = 1; i < tempChunk.length; i++) {
      tempChunk[i - 1] = tempChunk[i];
    }

    tempChunk[tempChunk.length - 1] = first;

    return tempChunk.join("");
  });

  return result.join("");
}
