 function checkEligibility(){
                      
                        let userName = document.getElementById("username")
                        let age = document.getElementById("Age").value;
                         let aMember = document.getElementById("member").checked;
                         
                         if (age >= 18 && aMember){
                          results=("CONGRATULATIONS,"+"you are eligible for a discount!!!");
                                 
                         }else if(age>=65){
                            results= ("CONGRATULATIONS,"+"you are eligible for a Senior discount!!!");
                         } else {
                           results=("Sorry,"+"you are not eligible for a discount.");
                           }

                            document.getElementById("output").innerHTML = results;

              } 