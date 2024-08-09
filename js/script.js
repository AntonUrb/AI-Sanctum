let button = document.querySelector(".sign-btn");
                let button2 = document.querySelector(".sign-btn2");
                let title = document.querySelector(".call-head");
                let text = document.querySelector(".call-text");
                // let a = 10;
                // let b = 7 * a

                const MAX = 57
                let actual = MAX - 13
                let percentage = actual / MAX


                button.addEventListener("click", thankFunc);
                button2.addEventListener("click", thankFunc);

                function thankFunc() {
                    title.textContent = "SIKE!"
                    text.textContent = "It doesn't do anything"
                }

                /------------------------------/

                let answer = (4 + 6 + 9) / 77;

                let log = document.querySelector(".quote");

                log.addEventListener("click", displayAnswer => {
                    log.textContent = answer.toFixed(4)
                })

                // function displayAnswer() {
                //     log.textContent = answer.toFixed(4);
                // }

                let arrowFunc = (answer, log) => console.log(answer + log.textContent)

                arrowFunc(answer, log)

                let add7 = n => n + 7
                console.log(add7(2))

                let multiply = (nr1, nr2) => nr1 * nr2
                console.log(multiply(add7(4), 7))

                let capitalize = function (string) {
                    return string.charAt(0).toUpperCase() + string.slice(1)
                }

                console.log(capitalize("string"))

                // console.log(9 * a)
                // console.log(b)
                console.log(percentage.toFixed(4))

                let lastLetter = (str) => str.charAt(str.length-1)
                
                log.addEventListener("click", displayAnswer => {
                    log.textContent = capitalize("string") + multiply(add7(2), 8) + lastLetter("topG")
                })