const userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image")


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active")
        optionImages.forEach((image2, index2) => {
            console.log(index, index2)
            index !== index2 && image2.classList.remove("active")
        })
        let time = setTimeout(() => {
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["rock.png", "paper.png", "scissors.png"]
            cpuResult.src = cpuImages[randomNumber]
            let cpuValue = ["T", "K", "M"][randomNumber]
            let userValue = ["T", "K", "M"][index]
            let outcomes = {
                TT: "Beraberlik",
                TK: "Kaybettiniz",
                TM: "Kazandınız",
                KT: "Kazandınız",
                KK: "Beraberlik",
                KM: "Kaybettiniz",
                MT: "Kaybettiniz",
                MK: "Kazandınız",
                MM: "Beraberlik",
            };
            console.log(userValue, cpuValue)
            let outcomeValue = outcomes[userValue + cpuValue]
            result.textContent = outcomeValue
        }, 1500);
    })
})




