let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let plusOneHomeBtn = document.getElementById("plus-one-home-btn")
let plusTwoHomeBtn = document.getElementById("plus-two-home-btn")
let plusThreeHomeBtn = document.getElementById("plus-three-home-btn")

let plusOneGuestBtn = document.getElementById("plus-one-guest-btn")
let plusTwoGuestBtn = document.getElementById("plus-two-guest-btn")
let plusThreeGuestBtn = document.getElementById("plus-three-guest-btn")
let newGameBtn = document.getElementById("new-game-btn")

plusOneHomeBtn.addEventListener("click", () => addScore(plusOneHomeBtn))
plusTwoHomeBtn.addEventListener("click", () => addScore(plusTwoHomeBtn))
plusThreeHomeBtn.addEventListener("click", () => addScore(plusThreeHomeBtn))
plusOneGuestBtn.addEventListener("click", () => addScore(plusOneGuestBtn))
plusTwoGuestBtn.addEventListener("click", () => addScore(plusTwoGuestBtn))
plusThreeGuestBtn.addEventListener("click", () => addScore(plusThreeGuestBtn))

newGameBtn.addEventListener("click", () => {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
    homeScoreEl.classList.remove("glow")
    guestScoreEl.classList.remove("glow")
})

function addScore(e) {
    switch(e.id)
    {
        case "plus-one-home-btn":
        {
            homeScore += 1
            homeScoreEl.innerText = homeScore
            break
        }
        case "plus-two-home-btn":
        {
            homeScore += 2
            homeScoreEl.innerText = homeScore
            break
        }
        case "plus-three-home-btn":
        {
            homeScore += 3
            homeScoreEl.innerText = homeScore
            break
        }
        case "plus-one-guest-btn":
        {
            guestScore += 1
            guestScoreEl.innerText = guestScore
            break
        }
        case "plus-two-guest-btn":
        {
            guestScore += 2
            guestScoreEl.innerText = guestScore
            break
        }
        case "plus-three-guest-btn":
        {
            guestScore += 3
            guestScoreEl.innerText = guestScore
            
        }
    }
    if(homeScore > guestScore)
            {
                homeScoreEl.classList.add("glow")
                guestScoreEl.classList.remove("glow");
            } else if(homeScore < guestScore)
            {
                homeScoreEl.classList.remove("glow")
                guestScoreEl.classList.add("glow");
            }
}