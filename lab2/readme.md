# File System (FS module)
FS module directly communicate with operating system rather than browser the common operation on a file or folder are 
- File : Write File , Read File , Append File
- Folder : MKdir/MD , rmdir/rm , readdir
- File Stack : metadata , stack , lstack , rstack
- watch : watch , unwatch 
- stream : ReadStream() , WriteStream()
- writeFile(): Writes data to a file. If the file already contains data, it overwrites the existing content.
- appendFile(): Adds new data to the end of an existing file without removing the existing content

<i>All function are promise so it must be called with await keyword </i>

> NODE is a complier use to run JS file 
> node file.js is a command use to run js file 