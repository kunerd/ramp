var searchIndex = {};
searchIndex['ramp'] = {"items":[[0,"","ramp","",null,null],[0,"ll","","",null,null],[5,"shl","ramp::ll","Performs a bit-shift of the limbs in {xp, xs}, left by `cnt` bits storing the result in {rp,\nrs}. The top-most shifted bits are returned.",null,null],[5,"shr","","Performs a bit-shift of the limbs in {xp, xs}, right by `cnt` bits storing the result in {rp,\nrs}. The bottom-most shifted bits are returned.",null,null],[5,"and_n","","Performs a bitwise \"and\" (`&`) of the n least signficant limbs of `xp` and `yp`, storing the\nresult in `wp`",null,null],[5,"and_not_n","","Performs a bitwise and of the n least signficant limbs of `xp` and `yp`, with the limbs of `yp`\nbeing first inverted. The result is stored in `wp`.",null,null],[5,"nand_n","","Performs a bitwise \"nand\" of the n least signficant limbs of `xp` and `yp`, storing the\nresult in `wp`",null,null],[5,"or_n","","Performs a bitwise \"or\" (`|`) of the n least signficant limbs of `xp` and `yp`, storing the\nresult in `wp`",null,null],[5,"or_not_n","","Performs a bitwise \"or\" of the n least signficant limbs of `xp` and `yp`, with the limbs of `yp`\nbeing first inverted. The result is stored in `wp`.",null,null],[5,"nor_n","","Performs a bitwise \"nor\" of the n least signficant limbs of `xp` and `yp`, storing the\nresult in `wp`",null,null],[5,"xor_n","","Performs a bitwise \"xor\" (`^`) of the n least signficant limbs of `xp` and `yp`, storing the\nresult in `wp`",null,null],[5,"not","","Performs a bitwise inversion (\"not\") of the n least signficant limbs of `xp`, storing the\nresult in `wp`",null,null],[5,"scan_1","","Scans for the first 1 bit starting from the least-significant bit the the most, returning\nthe bit index.",null,null],[5,"scan_0","","Scans for the first 0 bit starting from the least-significant bit the the most, returning\nthe bit index.",null,null],[5,"add_n","","Adds the `n` least signficant limbs of `xp` and `yp`, storing the result in {wp, n}.\nIf there was a carry, it is returned.",null,null],[5,"sub_n","","Subtracts the `n` least signficant limbs of `yp` from `xp`, storing the result in {wp, n}.\nIf there was a borrow from a higher-limb (i.e., the result would be negative), it is returned.",null,null],[5,"add","","",null,null],[5,"sub","","",null,null],[5,"add_1","","",null,null],[5,"sub_1","","",null,null],[5,"incr","","",null,null],[5,"decr","","",null,null],[5,"addmul_1","","Multiplies the `n` least-signficiant digits of `xp` by `vl` and adds them to the `n`\nleast-significant digits of `wp`. Returns the highest limb of the result.",null,null],[5,"submul_1","","Multiplies the `n` least-signficiant digits of `xp` by `vl` and subtracts them from the `n`\nleast-significant digits of `wp`. Returns the highest limb of the result, adjust for borrow.",null,null],[5,"mul_1","","Multiplies the `n` least-significant limbs of `xp` by `vl` storing the `n` least-significant\nlimbs of the product in `{wp, n}`.",null,null],[5,"mul","","Multiplies `{xp, xs}` by `{yp, ys}`, storing the result to `{wp, xs + ys}`.",null,null],[5,"divrem_1","","Divides the `xs` least-significant limbs at `xp` by `d`, storing the result in {qp, qxn + xs}.",null,null],[5,"divrem_2","","",null,null],[5,"divrem","","Divides {np, ns} by {dp, ds}. If ns <= ds, the quotient is stored in {qp, 1}, otherwise\nthe quotient is stored to {qp, (ns - ds) + 1}. The remainder is always stored to {rp, ds}.",null,null],[5,"overlap","","",null,null],[5,"same_or_separate","","",null,null],[5,"same_or_incr","","",null,null],[5,"same_or_decr","","",null,null],[5,"copy_incr","","Copies the `n` limbs from `src` to `dst` in an incremental fashion.",null,null],[5,"copy_decr","","Copies the `n` limbs from `src` to `dst` in a decremental fashion.",null,null],[5,"copy_rest","","Copies the `n - start` limbs from `src + start` to `dst + start`",null,null],[5,"normalize","","Returns the size of the integer pointed to by `p` such that the most\nsignificant limb is non-zero.",null,null],[5,"divide_by_zero","","Called when a divide by zero occurs.",null,{"inputs":[],"output":null}],[5,"is_zero","","Checks that all `nn` limbs in `np` are zero",null,null],[5,"zero","","",null,null],[5,"cmp","","Compares the `n` least-significant limbs of `xp` and `yp`, returning whether\n{xp, n} is less than, equal to or greater than {yp, n}",null,null],[0,"base","","",null,null],[5,"num_base_digits","ramp::ll::base","",null,null],[5,"base_digits_to_len","","",null,{"inputs":[{"name":"usize"},{"name":"u32"}],"output":{"name":"usize"}}],[5,"to_base","","Converts `nn` limbs at `np` to the given base, storing the output in `out`. `out` is assumed to\nhave enough space for the entire digit. The output is stored from most-significant digit to least.",null,null],[5,"from_base","","Converts the base `base` bytestring {bp, bs}, storing the limbs in `out`. `out` is assumed to\nhave enough space to store the result.",null,null],[0,"limb","ramp::ll","",null,null],[3,"Limb","ramp::ll::limb","Helper newtype for operations.",null,null],[5,"add_2","","Performs the two-word addition (ah, al) + (bh, bl), ignoring any overflow.",null,null],[5,"sub_2","","Performs the two-word subtraction (ah, al) - (bh, bl), ignoring any borrow.",null,null],[5,"div","","Divides the two-limb numerator `(nh, nl)` by `d`, returning a single-limb\nquotient, Q, and remainder, R, as (Q, R).",null,null],[5,"div_preinv","","Divides `(nh, nl)` by `d` using the inverted limb `dinv`. Returns the quotient, Q, and\nremainder, R, as (Q, R);",null,null],[6,"BaseInt","","",null,null],[11,"hash","","",0,null],[11,"cmp","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"ordering"}}],[11,"clone","","",0,{"inputs":[{"name":"limb"}],"output":{"name":"limb"}}],[17,"BITS","","",null,null],[17,"B","","",null,null],[11,"high_part","","Returns the high half of the limb",0,{"inputs":[{"name":"limb"}],"output":{"name":"limb"}}],[11,"low_part","","Returns the low half of the limb",0,{"inputs":[{"name":"limb"}],"output":{"name":"limb"}}],[11,"add_overflow","","Performs `self + other`, returning the result and whether or not the addition overflowed",0,null],[11,"sub_overflow","","Performs `self - other`, returning the result and whether or not the subtraction overflowed",0,null],[11,"mul_lo","","Performs `self * other` returning the lower half of the product",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"mul_hi","","Performs `self * other` returning the higher half of the product",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"mul_hilo","","Performs `self * other` returning the two-limb result as (high, low).",0,null],[11,"invert","","",0,{"inputs":[{"name":"limb"}],"output":{"name":"limb"}}],[11,"high_bit_set","","Returns whether or not the highest bit in the limb is set.",0,{"inputs":[{"name":"limb"}],"output":{"name":"bool"}}],[11,"leading_zeros","","Returns the number of leading zeros in the limb",0,{"inputs":[{"name":"limb"}],"output":{"name":"baseint"}}],[11,"trailing_zeros","","Returns the number of trailing zeros in the limb",0,{"inputs":[{"name":"limb"}],"output":{"name":"baseint"}}],[11,"add","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"add","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"limb"}}],[11,"add","","",0,{"inputs":[{"name":"limb"},{"name":"bool"}],"output":{"name":"limb"}}],[11,"add","","",1,{"inputs":[{"name":"baseint"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"sub","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"sub","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"limb"}}],[11,"sub","","",1,{"inputs":[{"name":"baseint"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"mul","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"mul","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"limb"}}],[11,"mul","","",1,{"inputs":[{"name":"baseint"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"div","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"div","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"limb"}}],[11,"rem","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"rem","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"limb"}}],[11,"neg","","",0,{"inputs":[{"name":"limb"}],"output":{"name":"limb"}}],[11,"shl","","",0,{"inputs":[{"name":"limb"},{"name":"i"}],"output":{"name":"limb"}}],[11,"shr","","",0,{"inputs":[{"name":"limb"},{"name":"i"}],"output":{"name":"limb"}}],[11,"not","","",0,{"inputs":[{"name":"limb"}],"output":{"name":"limb"}}],[11,"bitand","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"bitor","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"bitxor","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"limb"}}],[11,"eq","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"limb"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"limb"},{"name":"baseint"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"limb"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"limb"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"int","ramp","",null,null],[3,"Int","ramp::int","An arbitrary-precision signed integer.",null,null],[3,"ParseIntError","","",null,null],[11,"zero","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"one","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"from_single_limb","","Creates a new Int from the given Limb.",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"int"}}],[11,"sign","","Returns the sign of the Int as either -1, 0 or 1 for self being negative, zero\nor positive, respectively.",2,{"inputs":[{"name":"int"}],"output":{"name":"i32"}}],[11,"abs","","Consumes self and returns the absolute value",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"to_single_limb","","Returns the least-significant limb of self.",2,{"inputs":[{"name":"int"}],"output":{"name":"limb"}}],[11,"abs_cmp","","Compare the absolute value of self to the absolute value of other,\nreturning an Ordering with the result.",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"ordering"}}],[11,"shrink_to_fit","","Try to shrink the allocated data for this Int.",2,{"inputs":[{"name":"int"}],"output":null}],[11,"to_str_radix","","Returns a string containing the value of self in base `base`. For bases greater than\nten, if `upper` is true, upper-case letters are used, otherwise lower-case ones are used.",2,{"inputs":[{"name":"int"},{"name":"u8"},{"name":"bool"}],"output":{"name":"string"}}],[11,"write_radix","","",2,{"inputs":[{"name":"int"},{"name":"w"},{"name":"u8"},{"name":"bool"}],"output":{"name":"result"}}],[11,"from_str_radix","","Creates a new Int from the given string in base `base`.",2,{"inputs":[{"name":"int"},{"name":"str"},{"name":"u8"}],"output":{"name":"result"}}],[11,"divmod","","Divide self by other, returning the quotient, Q, and remainder, R as (Q, R).",2,null],[11,"pow","","Raises self to the power of exp",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"square","","Returns the square of `self`.",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"dsquare","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"clone","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"clone_from","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":null}],[11,"drop","","",2,{"inputs":[{"name":"int"}],"output":null}],[11,"eq","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"bool"}}],[11,"eq","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"bool"}}],[11,"eq","ramp::ll::limb","",0,{"inputs":[{"name":"limb"},{"name":"int"}],"output":{"name":"bool"}}],[11,"cmp","ramp::int","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"option"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"option"}}],[11,"partial_cmp","ramp::ll::limb","",0,{"inputs":[{"name":"limb"},{"name":"int"}],"output":{"name":"option"}}],[11,"hash","ramp::int","",2,{"inputs":[{"name":"int"},{"name":"h"}],"output":null}],[11,"add","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"int"}}],[11,"add","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"add","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"sub","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"int"}}],[11,"sub","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"sub","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"mul","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"int"}}],[11,"mul","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"mul","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"div","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"int"}}],[11,"div","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"div","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"rem","","",2,{"inputs":[{"name":"int"},{"name":"limb"}],"output":{"name":"int"}}],[11,"rem","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"rem","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"neg","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"shl","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"shr","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"bitand","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"bitand","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"bitor","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"bitor","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"int"}}],[11,"add","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"int"}}],[11,"sub","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"int"}}],[11,"mul","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"int"}}],[11,"div","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"int"}}],[11,"rem","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"int"}}],[11,"add","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"sub","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"mul","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"div","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"rem","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"add","","",2,{"inputs":[{"name":"int"},{"name":"baseint"}],"output":{"name":"int"}}],[11,"sub","","",2,{"inputs":[{"name":"int"},{"name":"baseint"}],"output":{"name":"int"}}],[11,"mul","","",2,{"inputs":[{"name":"int"},{"name":"baseint"}],"output":{"name":"int"}}],[11,"div","","",2,{"inputs":[{"name":"int"},{"name":"baseint"}],"output":{"name":"int"}}],[11,"rem","","",2,{"inputs":[{"name":"int"},{"name":"baseint"}],"output":{"name":"int"}}],[11,"add","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"add","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"sub","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"sub","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"mul","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"mul","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"div","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"div","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"rem","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"rem","","",1,{"inputs":[{"name":"baseint"},{"name":"int"}],"output":{"name":"int"}}],[11,"eq","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"option"}}],[11,"eq","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"option"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"i8"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"i16"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"i32"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"i64"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"isize"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"u8"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"u16"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"u32"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"u64"}],"output":{"name":"int"}}],[11,"from","","",2,{"inputs":[{"name":"int"},{"name":"usize"}],"output":{"name":"int"}}],[11,"fmt","","",2,{"inputs":[{"name":"int"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"int"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"int"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"int"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"int"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"int"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"parseinterror"},{"name":"parseinterror"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"parseinterror"},{"name":"parseinterror"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"parseinterror"}],"output":{"name":"parseinterror"}}],[11,"fmt","","",3,{"inputs":[{"name":"parseinterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"parseinterror"}],"output":{"name":"str"}}],[11,"fmt","","",3,{"inputs":[{"name":"parseinterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",2,{"inputs":[{"name":"int"},{"name":"str"}],"output":{"name":"result"}}],[11,"zero","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"one","","",2,{"inputs":[{"name":"int"}],"output":{"name":"int"}}],[11,"step","","",2,{"inputs":[{"name":"int"},{"name":"int"}],"output":{"name":"option"}}],[11,"steps_between","","",2,{"inputs":[{"name":"int"},{"name":"int"},{"name":"int"},{"name":"int"}],"output":{"name":"option"}}]],"paths":[[3,"Limb"],[6,"BaseInt"],[3,"Int"],[3,"ParseIntError"]]};
searchIndex['gcc'] = {"items":[[0,"","gcc","A library for build scripts to compile custom C code",null,null],[3,"Config","","Extra configuration to pass to gcc.",null,null],[5,"compile_library","","Compile a library from the given set of input C files.",null,null],[11,"new","","Construct a new instance of a blank set of configuration.",0,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"include","","Add a directory to the `-I` or include path for headers",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"define","","Specify a `-D` variable with an optional value.",0,{"inputs":[{"name":"config"},{"name":"str"},{"name":"option"}],"output":{"name":"config"}}],[11,"object","","Add an arbitrary object file to link in",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"flag","","Add an arbitrary flag to the invocation of the compiler",0,{"inputs":[{"name":"config"},{"name":"str"}],"output":{"name":"config"}}],[11,"file","","Add a file which will be compiled",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"cpp","","Set C++ support.",0,{"inputs":[{"name":"config"},{"name":"bool"}],"output":{"name":"config"}}],[11,"cpp_link_stdlib","","Set the standard library to link against when compiling with C++\nsupport.",0,{"inputs":[{"name":"config"},{"name":"option"}],"output":{"name":"config"}}],[11,"cpp_set_stdlib","","Force the C++ compiler to use the specified standard library.",0,{"inputs":[{"name":"config"},{"name":"option"}],"output":{"name":"config"}}],[11,"compile","","Run the compiler, generating the file `output`",0,{"inputs":[{"name":"config"},{"name":"str"}],"output":null}]],"paths":[[3,"Config"]]};
initSearch(searchIndex);
