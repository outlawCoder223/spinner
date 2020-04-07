const spinner = function() {
  let timer = 100;
  const rotation = [ '|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n' ];
  for (const char of rotation) {
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, timer);
    timer += 200
  }
};
spinner()