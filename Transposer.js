<script type='text/javascript'>
    <!--
    document.write(unescape('%3Cscript%3E%0Afunction%20transposechord%28%29%20%7B%0A%0A%20%20%20%20if%20%28%24.trim%28%24%28%22textarea%23textmasuk%22%29.val%28%29%29%20%21%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20var%20haha%20%3D%20%24%28%22textarea%23textmasuk%22%29.val%28%29%3B%0A%20%20%20%20%7D%0A%20%0A%20var%20str2%20%3D%20%22%3Cpre%20data-key%3D%27C%27%20id%3D%27copythis%27%3E%22%3B%0A%20var%20str3%20%3D%20%22%3C/pre%3E%22%3B%0A%20%0A%20var%20res%20%3D%20str2%20+%20haha%20+%20str3%3B%0A%0A%20%20%20%20document.getElementById%28%22demochordtela%22%29.innerHTML%20%3D%20res%3B%0A%20%24%28%22pre%22%29.transpose%28%29%3B%0A%7D%0A%3C/script%3E%0A%20%20%3Cscript%20type%3D%22text/javascript%22%20src%3D%22http%3A//ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js%22%3E%3C/script%3E%0A%3Cscript%3E%0A%20%20/*%21%0A%20*%20jQuery%20Chord%20Transposer%20plugin%20v1.0%0A%20*%20http%3A//codegavin.com/projects/transposer%0A%20*%0A%20*%20Copyright%202010%2C%20Jesse%20Gavin%0A%20*%20Dual%20licensed%20under%20the%20MIT%20or%20GPL%20Version%202%20licenses.%0A%20*%20http%3A//codegavin.com/license%0A%20*%0A%20*%20Date%3A%20Sat%20Jun%2026%2021%3A27%3A00%202010%20-0600%0A%20*/%0A%28function%28%24%29%20%7B%0A%0A%20%20%24.fn.transpose%20%3D%20function%28options%29%20%7B%0A%20%20%20%20var%20opts%20%3D%20%24.extend%28%7B%7D%2C%20%24.fn.transpose.defaults%2C%20options%29%3B%0A%0A%20%20%20%20var%20currentKey%20%3D%20null%3B%0A%0A%20%20%20%20var%20keys%20%3D%20%5B%0A%20%20%20%20%20%20%7B%20name%3A%20%27Ab%27%2C%20%20value%3A%200%2C%20%20%20type%3A%20%27F%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27A%27%2C%20%20%20value%3A%201%2C%20%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27A%23%27%2C%20%20value%3A%202%2C%20%20%20type%3A%20%27S%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27Bb%27%2C%20%20value%3A%202%2C%20%20%20type%3A%20%27F%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27B%27%2C%20%20%20value%3A%203%2C%20%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27C%27%2C%20%20%20value%3A%204%2C%20%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27C%23%27%2C%20%20value%3A%205%2C%20%20%20type%3A%20%27S%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27Db%27%2C%20%20value%3A%205%2C%20%20%20type%3A%20%27F%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27D%27%2C%20%20%20value%3A%206%2C%20%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27D%23%27%2C%20%20value%3A%207%2C%20%20%20type%3A%20%27S%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27Eb%27%2C%20%20value%3A%207%2C%20%20%20type%3A%20%27F%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27E%27%2C%20%20%20value%3A%208%2C%20%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27F%27%2C%20%20%20value%3A%209%2C%20%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27F%23%27%2C%20%20value%3A%2010%2C%20%20type%3A%20%27S%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27Gb%27%2C%20%20value%3A%2010%2C%20%20type%3A%20%27F%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27G%27%2C%20%20%20value%3A%2011%2C%20%20type%3A%20%27N%27%20%7D%2C%0A%20%20%20%20%20%20%7B%20name%3A%20%27G%23%27%2C%20%20value%3A%200%2C%20%20%20type%3A%20%27S%27%20%7D%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20var%20getKeyByName%20%3D%20function%20%28name%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28name.charAt%28name.length-1%29%20%3D%3D%20%22m%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%20%3D%20name.substring%280%2C%20name.length-1%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20keys.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28name%20%3D%3D%20keys%5Bi%5D.name%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20keys%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20getChordRoot%20%3D%20function%20%28input%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28input.length%20%3E%201%20%26%26%20%28input.charAt%281%29%20%3D%3D%20%22b%22%20%7C%7C%20input.charAt%281%29%20%3D%3D%20%22%23%22%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20input.substr%280%2C%202%29%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20input.substr%280%2C%201%29%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20getNewKey%20%3D%20function%20%28oldKey%2C%20delta%2C%20targetKey%29%20%7B%0A%20%20%20%20%20%20%20%20var%20keyValue%20%3D%20getKeyByName%28oldKey%29.value%20+%20delta%3B%0A%0A%20%20%20%20%20%20%20%20if%20%28keyValue%20%3E%2011%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20keyValue%20-%3D%2012%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20%28keyValue%20%3C%200%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20keyValue%20+%3D%2012%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20var%20i%3D0%3B%0A%20%20%20%20%20%20%20%20if%20%28keyValue%20%3D%3D%200%20%7C%7C%20keyValue%20%3D%3D%202%20%7C%7C%20keyValue%20%3D%3D%205%20%7C%7C%20keyValue%20%3D%3D%207%20%7C%7C%20keyValue%20%3D%3D%2010%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20Return%20the%20Flat%20or%20Sharp%20Key%0A%20%20%20%20%20%20%20%20%20%20%20%20switch%28targetKey.name%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22A%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22A%23%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22B%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22C%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22C%23%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22D%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22D%23%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22E%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22F%23%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22G%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22G%23%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20%28%3Bi%3Ckeys.length%3Bi++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28keys%5Bi%5D.value%20%3D%3D%20keyValue%20%26%26%20keys%5Bi%5D.type%20%3D%3D%20%22S%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20keys%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20%28%3Bi%3Ckeys.length%3Bi++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28keys%5Bi%5D.value%20%3D%3D%20keyValue%20%26%26%20keys%5Bi%5D.type%20%3D%3D%20%22F%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20keys%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20Return%20the%20Natural%20Key%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20%28%3Bi%3Ckeys.length%3Bi++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28keys%5Bi%5D.value%20%3D%3D%20keyValue%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20keys%5Bi%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20getChordType%20%3D%20function%20%28key%29%20%7B%0A%20%20%20%20%20%20%20%20switch%20%28key.charAt%28key.length%20-%201%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20case%20%22b%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22F%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20case%20%22%23%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22S%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22N%22%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20getDelta%20%3D%20function%20%28oldIndex%2C%20newIndex%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28oldIndex%20%3E%20newIndex%29%0A%20%20%20%20%20%20%20%20%20%20%20%20return%200%20-%20%28oldIndex%20-%20newIndex%29%3B%0A%20%20%20%20%20%20%20%20else%20if%20%28oldIndex%20%3C%20newIndex%29%0A%20%20%20%20%20%20%20%20%20%20%20%20return%200%20+%20%28newIndex%20-%20oldIndex%29%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20return%200%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20transposeSong%20%3D%20function%20%28target%2C%20key%29%20%7B%0A%20%20%20%20%20%20%20%20var%20newKey%20%3D%20getKeyByName%28key%29%3B%0A%0A%20%20%20%20%20%20%20%20if%20%28currentKey.name%20%3D%3D%20newKey.name%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20var%20delta%20%3D%20getDelta%28currentKey.value%2C%20newKey.value%29%3B%0A%0A%20%20%20%20%20%20%20%20%24%28%22span.c%22%2C%20target%29.each%28function%20%28i%2C%20el%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20transposeChord%28el%2C%20delta%2C%20newKey%29%3B%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20currentKey%20%3D%20newKey%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20transposeChord%20%3D%20function%20%28selector%2C%20delta%2C%20targetKey%29%20%7B%0A%20%20%20%20%20%20%20%20var%20el%20%3D%20%24%28selector%29%3B%0A%20%20%20%20%20%20%20%20var%20oldChord%20%3D%20el.text%28%29%3B%0A%20%20%20%20%20%20%20%20var%20oldChordRoot%20%3D%20getChordRoot%28oldChord%29%3B%0A%20%20%20%20%20%20%20%20var%20newChordRoot%20%3D%20getNewKey%28oldChordRoot%2C%20delta%2C%20targetKey%29%3B%0A%20%20%20%20%20%20%20%20var%20newChord%20%3D%20newChordRoot.name%20+%20oldChord.substr%28oldChordRoot.length%29%3B%0A%20%20%20%20%20%20%20%20el.text%28newChord%29%3B%0A%0A%20%20%20%20%20%20%20%20var%20sib%20%3D%20el%5B0%5D.nextSibling%3B%0A%20%20%20%20%20%20%20%20if%20%28sib%20%26%26%20sib.nodeType%20%3D%3D%203%20%26%26%20sib.nodeValue.length%20%3E%200%20%26%26%20sib.nodeValue.charAt%280%29%20%21%3D%20%22/%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20wsLength%20%3D%20getNewWhiteSpaceLength%28oldChord.length%2C%20newChord.length%2C%20sib.nodeValue.length%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sib.nodeValue%20%3D%20makeString%28%22%20%22%2C%20wsLength%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20getNewWhiteSpaceLength%20%3D%20function%20%28a%2C%20b%2C%20c%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28a%20%3E%20b%29%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%28c%20+%20%28a%20-%20b%29%29%3B%0A%20%20%20%20%20%20%20%20else%20if%20%28a%20%3C%20b%29%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%28c%20-%20%28b%20-%20a%29%29%3B%0A%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20c%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20makeString%20%3D%20function%20%28s%2C%20repeat%29%20%7B%0A%20%20%20%20%20%20%20%20var%20o%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20repeat%3B%20i++%29%20o.push%28s%29%3B%0A%20%20%20%20%20%20%20%20return%20o.join%28%22%22%29%3B%0A%20%20%20%20%7D%0A%0A%0A%20%20%20%20var%20isChordLine%20%3D%20function%20%28input%29%20%7B%0A%09var%20jem%3Dinput.replace%28/%5C../g%2C%20%22%20%22%29%3B%0A%09var%20jem2%3Djem.replace%28/%5C%u2013/g%2C%22%20%22%29%3B%0A%09jem2%3Djem2.replace%28/%5C-/g%2C%22%20%22%29%3B%0A%20%20%20%20%20%20%20%20var%20tokens%20%3D%20jem2.replace%28/%5Cs+/%2C%20%22%20%22%29.split%28%22%20%22%29%3B%0A%20%20%20%20%20%20%20%20//%20Try%20to%20find%20tokens%20that%20aren%27t%20chords%0A%20%20%20%20%20%20%20%20//%20if%20we%20find%20one%20we%20know%20that%20this%20line%20is%20not%20a%20%27chord%27%20line.%0A%20%20%20%20%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20tokens.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%21%24.trim%28tokens%5Bi%5D%29.length%20%3D%3D%200%20%26%26%20%21tokens%5Bi%5D.match%28opts.chordRegex%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20wrapChords%20%3D%20function%20%28input%29%20%7B%0A%20%20%20%20%20%20%20%20return%20input.replace%28opts.chordReplaceRegex%2C%20%22%3Cspan%20class%3D%27c%27%3E%241%3C/span%3E%22%29%3B%0A%20%20%20%20%7D%3B%0A%0A%0A%20%20%20%20return%20%24%28this%29.each%28function%28%29%20%7B%0A%0A%20%20%20%20%20%20var%20startKey%20%3D%20%24%28this%29.attr%28%22data-key%22%29%3B%0A%20%20%20%20%20%20if%20%28%21startKey%20%7C%7C%20%24.trim%28startKey%29%20%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20startKey%20%3D%20opts.key%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20if%20%28%21startKey%20%7C%7C%20%24.trim%28startKey%29%20%3D%3D%20%22%22%29%20%7B%0A%20%20%20%20%20%20%20%20throw%28%22Starting%20key%20not%20defined.%22%29%3B%0A%20%20%20%20%20%20%20%20return%20this%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20currentKey%20%3D%20getKeyByName%28startKey%29%3B%0A%0A%20%20%20%20%20%20//%20Build%20tranpose%20links%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%20%20%20%20var%20keyLinks%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%24%28keys%29.each%28function%28i%2C%20key%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20%28currentKey.name%20%3D%3D%20key.name%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20keyLinks.push%28%22%3Ca%20href%3D%27%23%27%20class%3D%27selected%27%3E%22%20+%20key.name%20+%20%22%3C/a%3E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20keyLinks.push%28%22%3Ca%20href%3D%27%23%27%3E%22%20+%20key.name%20+%20%22%3C/a%3E%22%29%3B%0A%20%20%20%20%20%20%7D%29%3B%0A%0A%0A%20%20%20%20%20%20var%20%24this%20%3D%20%24%28this%29%3B%0A%20%20%20%20%20%20var%20keysHtml%20%3D%20%24%28%22%3Cdiv%20class%3D%27transpose-keys%27%3E%3C/div%3E%22%29%3B%0A%20%20%20%20%20%20keysHtml.html%28keyLinks.join%28%22%22%29%29%3B%0A%20%20%20%20%20%20%24%28%22a%22%2C%20keysHtml%29.click%28function%28e%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20e.preventDefault%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20transposeSong%28%24this%2C%20%24%28this%29.text%28%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%24%28%22.transpose-keys%20a%22%29.removeClass%28%22selected%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20%24%28this%29.addClass%28%22selected%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%7D%29%3B%0A%0A%20%20%20%20%20%20%24%28this%29.before%28keysHtml%29%3B%0A%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20var%20output%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20var%20lines%20%3D%20%24%28this%29.text%28%29.split%28%22%5Cn%22%29%3B%0A%20%20%20%20%20%20var%20line%2C%20tmp%20%3D%20%22%22%3B%0A%0A%20%20%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20lines.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20line%20%3D%20lines%5Bi%5D%3B%0A%0A%20%20%20%20%20%20%20%20%20%20if%20%28isChordLine%28line%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20output.push%28%22%3Cspan%3E%22%20+%20wrapChords%28line%29%20+%20%22%3C/span%3E%22%29%3B%0A%20%20%20%20%20%20%20%20%20%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20output.push%28%22%3Cspan%20class%3D%27d%27%3E%22%20+%20line%20+%20%22%3C/span%3E%22%29%3B%0A%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%24%28this%29.html%28output.join%28%22%5Cn%22%29%29%3B%0A%20%20%20%20%7D%29%3B%0A%20%20%7D%3B%0A%0A%0A%20%20%24.fn.transpose.defaults%20%3D%20%7B%0A%20%20%20%20chordRegex%3A%20/%5E%5BA-G%5D%5Bb%5C%23%5C-%5D%3F%282%7C4%7C5%7C6%7C7%7C9%7C11%7C13%7C6%5C/9%7C7%5C-5%7C7%5C-9%7C7%5C%235%7C7%5C%239%7C7%5C+5%7C7%5C+9%7Cb5%7C%235%7C%239%7C7b5%7C7b9%7C7sus2%7C7sus4%7Cadd2%7Cadd4%7Cadd9%7Caug%7Cdim%7Cdim7%7Cm%5C/maj7%7Cm6%7Cm7%7Cm7b5%7Cm9%7Cm11%7Cm13%7Cmaj7%7Cmaj9%7Cmaj11%7Cmaj13%7Cmb5%7Cm%7Csus%7Csus2%7Csus4%29*%28%5C/%5BA-G%5D%5Bb%5C%23%5C-%5D*%29*%24/%2C%0AchordReplaceRegex%3A%20/%28%5BA-G%5D%5Bb%5C%23%5C-%5D%3F%282%7C4%7C5%7C6%7C7%7C9%7C11%7C13%7C6%5C/9%7C7%5C-5%7C7%5C-9%7C7%5C%235%7C7%5C%239%7C7%5C+5%7C7%5C+9%7Cb5%7C%235%7C%239%7C7b5%7C7b9%7C7sus2%7C7sus4%7Cadd2%7Cadd4%7Cadd9%7Caug%7Cdim%7Cdim7%7Cm%5C/maj7%7Cm6%7Cm7%7Cm7b5%7Cm9%7Cm11%7Cm13%7Cmaj7%7Cmaj9%7Cmaj11%7Cmaj13%7Cmb5%7Cm%7Csus%7Csus2%7Csus4%29*%29/g%0A%20%20%7D%3B%0A%0A%7D%29%28jQuery%29%3B%0A%3C/script%3E%0A%20%20%3Cscript%20type%3D%22text/javascript%22%3E%0A%24%28function%28%29%20%7B%0A%24%28%22pre%22%29.transpose%28%29%3B%0A%7D%29%3B%0A%20%20%3C/script%3E'));
    //-->
</script>
<script type='text/javascript'>
    function transposechord() {

        if ($.trim($("textarea#textmasuk").val()) != "") {
            var haha = $("textarea#textmasuk").val();
        }

        var str2 = "<pre data-key='C' id='copythis'>";
        var str3 = "</pre>";

        var res = str2 + haha + str3;

        document.getElementById("demochordtela").innerHTML = res;
        $("pre").transpose();
    }
</script>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js'></script>
<script type='text/javascript'>
    /*!
     * jQuery Chord Transposer plugin v1.0
     * http://codegavin.com/projects/transposer
     *
     * Copyright 2010, Jesse Gavin
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://codegavin.com/license
     *
     * Date: Sat Jun 26 21:27:00 2010 -0600
     */
    (function($) {

        $.fn.transpose = function(options) {
            var opts = $.extend({}, $.fn.transpose.defaults, options);

            var currentKey = null;

            var keys = [{
                name: 'Ab',
                value: 0,
                type: 'F'
            }, {
                name: 'A',
                value: 1,
                type: 'N'
            }, {
                name: 'A#',
                value: 2,
                type: 'S'
            }, {
                name: 'Bb',
                value: 2,
                type: 'F'
            }, {
                name: 'B',
                value: 3,
                type: 'N'
            }, {
                name: 'C',
                value: 4,
                type: 'N'
            }, {
                name: 'C#',
                value: 5,
                type: 'S'
            }, {
                name: 'Db',
                value: 5,
                type: 'F'
            }, {
                name: 'D',
                value: 6,
                type: 'N'
            }, {
                name: 'D#',
                value: 7,
                type: 'S'
            }, {
                name: 'Eb',
                value: 7,
                type: 'F'
            }, {
                name: 'E',
                value: 8,
                type: 'N'
            }, {
                name: 'F',
                value: 9,
                type: 'N'
            }, {
                name: 'F#',
                value: 10,
                type: 'S'
            }, {
                name: 'Gb',
                value: 10,
                type: 'F'
            }, {
                name: 'G',
                value: 11,
                type: 'N'
            }, {
                name: 'G#',
                value: 0,
                type: 'S'
            }];

            var getKeyByName = function(name) {
                if (name.charAt(name.length - 1) == "m") {
                    name = name.substring(0, name.length - 1);
                }
                for (var i = 0; i < keys.length; i++) {
                    if (name == keys[i].name) {
                        return keys[i];
                    }
                }
            };

            var getChordRoot = function(input) {
                if (input.length > 1 && (input.charAt(1) == "b" || input.charAt(1) == "#"))
                    return input.substr(0, 2);
                else
                    return input.substr(0, 1);
            };

            var getNewKey = function(oldKey, delta, targetKey) {
                var keyValue = getKeyByName(oldKey).value + delta;

                if (keyValue > 11) {
                    keyValue -= 12;
                } else if (keyValue < 0) {
                    keyValue += 12;
                }

                var i = 0;
                if (keyValue == 0 || keyValue == 2 || keyValue == 5 || keyValue == 7 || keyValue == 10) {
                    // Return the Flat or Sharp Key
                    switch (targetKey.name) {
                        case "A":
                        case "A#":
                        case "B":
                        case "C":
                        case "C#":
                        case "D":
                        case "D#":
                        case "E":
                        case "F#":
                        case "G":
                        case "G#":
                            for (; i < keys.length; i++) {
                                if (keys[i].value == keyValue && keys[i].type == "S") {
                                    return keys[i];
                                }
                            }
                        default:
                            for (; i < keys.length; i++) {
                                if (keys[i].value == keyValue && keys[i].type == "F") {
                                    return keys[i];
                                }
                            }
                    }
                } else {
                    // Return the Natural Key
                    for (; i < keys.length; i++) {
                        if (keys[i].value == keyValue) {
                            return keys[i];
                        }
                    }
                }
            };

            var getChordType = function(key) {
                switch (key.charAt(key.length - 1)) {
                    case "b":
                        return "F";
                    case "#":
                        return "S";
                    default:
                        return "N";
                }
            };

            var getDelta = function(oldIndex, newIndex) {
                if (oldIndex > newIndex)
                    return 0 - (oldIndex - newIndex);
                else if (oldIndex < newIndex)
                    return 0 + (newIndex - oldIndex);
                else
                    return 0;
            };

            var transposeSong = function(target, key) {
                var newKey = getKeyByName(key);

                if (currentKey.name == newKey.name) {
                    return;
                }

                var delta = getDelta(currentKey.value, newKey.value);

                $("span.c", target).each(function(i, el) {
                    transposeChord(el, delta, newKey);
                });

                currentKey = newKey;
            };

            var transposeChord = function(selector, delta, targetKey) {
                var el = $(selector);
                var oldChord = el.text();
                var oldChordRoot = getChordRoot(oldChord);
                var newChordRoot = getNewKey(oldChordRoot, delta, targetKey);
                var newChord = newChordRoot.name + oldChord.substr(oldChordRoot.length);
                el.text(newChord);

                var sib = el[0].nextSibling;
                if (sib && sib.nodeType == 3 && sib.nodeValue.length > 0 && sib.nodeValue.charAt(0) != "/") {
                    var wsLength = getNewWhiteSpaceLength(oldChord.length, newChord.length, sib.nodeValue.length);
                    sib.nodeValue = makeString(" ", wsLength);
                }
            };

            var getNewWhiteSpaceLength = function(a, b, c) {
                if (a > b)
                    return (c + (a - b));
                else if (a < b)
                    return (c - (b - a));
                else
                    return c;
            };

            var makeString = function(s, repeat) {
                var o = [];
                for (var i = 0; i < repeat; i++) o.push(s);
                return o.join("");
            }

            var isChordLine = function(input) {
                var jem = input.replace(/\../g, " ");
                var jem2 = jem.replace(/\–/g, " ");
                jem2 = jem2.replace(/\-/g, " ");
                var tokens = jem2.replace(/\s+/, " ").split(" ");
                // Try to find tokens that aren't chords
                // if we find one we know that this line is not a 'chord' line.
                for (var i = 0; i < tokens.length; i++) {
                    if (!$.trim(tokens[i]).length == 0 && !tokens[i].match(opts.chordRegex))
                        return false;
                }
                return true;
            };

            var wrapChords = function(input) {
                return input.replace(opts.chordReplaceRegex, "<span class='c'>$1</span>");
            };

            return $(this).each(function() {

                var startKey = $(this).attr("data-key");
                if (!startKey || $.trim(startKey) == "") {
                    startKey = opts.key;
                }

                if (!startKey || $.trim(startKey) == "") {
                    throw ("Starting key not defined.");
                    return this;
                }

                currentKey = getKeyByName(startKey);

                // Build tranpose links ===========================================
                var keyLinks = [];
                $(keys).each(function(i, key) {
                    if (currentKey.name == key.name)
                        keyLinks.push("<a href='#' class='selected'>" + key.name + "</a>");
                    else
                        keyLinks.push("<a href='#'>" + key.name + "</a>");
                });

                var $this = $(this);
                var keysHtml = $("<div class='transpose-keys'></div>");
                keysHtml.html(keyLinks.join(""));
                $("a", keysHtml).click(function(e) {
                    e.preventDefault();
                    transposeSong($this, $(this).text());
                    $(".transpose-keys a").removeClass("selected");
                    $(this).addClass("selected");
                    return false;
                });

                $(this).before(keysHtml);

                var output = [];
                var lines = $(this).text().split("\n");
                var line, tmp = "";

                for (var i = 0; i < lines.length; i++) {
                    line = lines[i];

                    if (isChordLine(line))
                        output.push("<span>" + wrapChords(line) + "</span>");
                    else
                        output.push("<span class='d'>" + line + "</span>");
                };

                $(this).html(output.join("\n"));
            });
        };

        $.fn.transpose.defaults = {
            chordRegex: /^[A-G][b\#\-]?(2|4|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|b5|#5|#9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*(\/[A-G][b\#\-]*)*$/,
            chordReplaceRegex: /([A-G][b\#\-]?(2|4|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|b5|#5|#9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*)/g
        };

    })(jQuery);
</script>
<script type='text/javascript'>
    $(function() {
        $("pre").transpose();
    });
</script>
