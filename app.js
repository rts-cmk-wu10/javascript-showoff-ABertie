const SEARCH_FORM = document.querySelector(".searchForm")

SEARCH_FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()
    
    let searchValue = event.target.search.value
    
    const RESULTS = DECK_OF_CARDS.filter(function(card) {
        return findInArray(card.Number.toString(), searchValue)
        || findInArray(card.Symbols, searchValue)
    })

    ShowResults(RESULTS)
}

function findInArray(haystack, needle) {
    return haystack.toLowerCase().includes(needle.toLowerCase())
}

const compare = (a, b) => a == b

function ShowResults(result) {
    const SECTION = document.querySelector(".searchResult")
    
    SECTION.innerHTML = ""
    
    result.forEach(item => {
        const UL = document.createElement("ul")
        UL.classList = "card"
        if (item.Symbols == "Joker") UL.classList += " joker"
        UL.innerHTML += 
        `
            <li class="cardType">${item.Number}</li>
			<li class="cardFamily">${checkSymbols(item.Symbols)}</li>
        `

        SECTION.appendChild(UL)
    })}

function checkSymbols(symbol) {
    if (symbol == "Klør") return "♣️" 
    else if(symbol == "Spar") return "♠️"
    else if(symbol == "Hjerte") return "♥️"
    else if(symbol == "Ruder") return "♦️"
    else return "🃏"
}

const DECK_OF_CARDS = [
    {
        Number: "A",
        Symbols: "Klør"
    },
    {
        Number: 2,
        Symbols: "Klør"
    },
    {
        Number: 3,
        Symbols: "Klør"
    },
    {
        Number: 4,
        Symbols: "Klør"
    },
    {
        Number: 5,
        Symbols: "Klør"
    },
    {
        Number: 6,
        Symbols: "Klør"
    },
    {
        Number: 7,
        Symbols: "Klør"
    },
    {
        Number: 8,
        Symbols: "Klør"
    },
    {
        Number: 9,
        Symbols: "Klør"
    },
    {
        Number: 10,
        Symbols: "Klør"
    },
    {
        Number: "J",
        Symbols: "Klør"
    },
    {
        Number: "D",
        Symbols: "Klør"
    },
    {
        Number: "K",
        Symbols: "Klør"
    },
    {
        Number: "A",
        Symbols: "Spar"
    },
    {
        Number: 2,
        Symbols: "Spar"
    },
    {
        Number: 3,
        Symbols: "Spar"
    },
    {
        Number: 4,
        Symbols: "Spar"
    },
    {
        Number: 5,
        Symbols: "Spar"
    },
    {
        Number: 6,
        Symbols: "Spar"
    },
    {
        Number: 7,
        Symbols: "Spar"
    },
    {
        Number: 8,
        Symbols: "Spar"
    },
    {
        Number: 9,
        Symbols: "Spar"
    },
    {
        Number: 10,
        Symbols: "Spar"
    },
    {
        Number: "J",
        Symbols: "Spar"
    },
    {
        Number: "D",
        Symbols: "Spar"
    },
    {
        Number: "K",
        Symbols: "Spar"
    },
    {
        Number: "A",
        Symbols: "Hjerte"
    },
    {
        Number: 2,
        Symbols: "Hjerte"
    },
    {
        Number: 3,
        Symbols: "Hjerte"
    },
    {
        Number: 4,
        Symbols: "Hjerte"
    },
    {
        Number: 5,
        Symbols: "Hjerte"
    },
    {
        Number: 6,
        Symbols: "Hjerte"
    },
    {
        Number: 7,
        Symbols: "Hjerte"
    },
    {
        Number: 8,
        Symbols: "Hjerte"
    },
    {
        Number: 9,
        Symbols: "Hjerte"
    },
    {
        Number: 10,
        Symbols: "Hjerte"
    },
    {
        Number: "J",
        Symbols: "Hjerte"
    },
    {
        Number: "D",
        Symbols: "Hjerte"
    },
    {
        Number: "K",
        Symbols: "Hjerte"
    },
    {
        Number: "A",
        Symbols: "Ruder"
    },
    {
        Number: 2,
        Symbols: "Ruder"
    },
    {
        Number: 3,
        Symbols: "Ruder"
    },
    {
        Number: 4,
        Symbols: "Ruder"
    },
    {
        Number: 5,
        Symbols: "Ruder"
    },
    {
        Number: 6,
        Symbols: "Ruder"
    },
    {
        Number: 7,
        Symbols: "Ruder"
    },
    {
        Number: 8,
        Symbols: "Ruder"
    },
    {
        Number: 9,
        Symbols: "Ruder"
    },
    {
        Number: 10,
        Symbols: "Ruder"
    },
    {
        Number: "J",
        Symbols: "Ruder"
    },
    {
        Number: "D",
        Symbols: "Ruder"
    },
    {
        Number: "K",
        Symbols: "Ruder"
    },
    {
        Number: "Joker",
        Symbols: "Joker"
    }
]