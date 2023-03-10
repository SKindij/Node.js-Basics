console.log("Hello first log!");      // => "Hello first log!"
console.log("1981 + 42 =%i", 2023);  // => "1981 + 42 =2023"

console.info("first", "second");     // => "first second"

console.dir( {foo: {bar:1, baz:{ qux: 42}} }, {depth:null} );  // => { foo: { bar: 1, baz: { qux: 42 } } }
console.dir( {foo: {bar:1, baz:{ qux: 42}} }, {depth:1} );     // => { foo: { bar: 1, baz: [Object] } }

console.error("Failed!");           // => Failed!
console.warn("Warning!");           // => Warning!

console.log(process.argv);    // => [ 'C:\\Program Files\\nodejs\\node.exe' ]

console.log(process.env); 
console.log(process.env["HOME"]);

const args = process.argv.slice(2);
console.log(process.env[args[0]]);

args.forEach(arg => {
  let envVar = process.env[arg];
  if (envVar === undefined) { console.error(`Could not find "${arg}" in environment`);
  } else { console.log(envVar); }
});


