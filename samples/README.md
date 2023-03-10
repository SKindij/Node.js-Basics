## let's look at examples


>  file: ``firstNode.js``
> > ``console`` _provides simple methods for writing to stdout, stderr, or any other Node.js stream, which is mostly the command line_<br>
> > ``process`` _is a global object that contains functions and data related to the current Node.js process;_<br>
> > ``argv`` _is an array of strings containing all command-line arguments given to the program;_<br>

> when you run this program, you provide a command line argument like this:<br>
> run ``node firstNode.js hello arguments``<br>
> Output   =>>>   ['C:\\Program Files\\nodejs\\node.exe', 'E:\\IT-KiSe\\school-Node\\firstNode.js', 'hello', ' arguments ' ]
> > + in the [process.argv array]
> >   - 1st argument is the location of the Node.js binary file
> >   - 2nd argument is the location of file that is being launched

> change ``console.log(process.arg);`` to the following ``console.log(process.argv.slice(2));``<br>
> run ``node firstNode.js hello arguments``<br>
> > Output  =>>>   [ 'hello', ' arguments ' ]

