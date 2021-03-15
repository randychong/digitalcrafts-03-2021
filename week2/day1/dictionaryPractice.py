# add your info
digitalCraftsStudent = {
    "name": "Randy Chong",
    "city": "Houston",
    "computer": ["Razerblade 2015"]

}

# print(digitalCraftsStudent["computer"][0])
# add a platform, ps5, pc, xbox1, switch
# add skill level
# print preferred time to game, print in the terminal
gamer = {
    "platform": "PC",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": 'professional killstealer'
}

# print(gamer["gamingHours"][1]["weekends"])

stonks = {
    "name": "Game Doge",
    "ticker": "GGDOG",
    "pricePerShare": 1,
    "denomination": "cent",
    "volume": "25",
    "volatility": "low",
    "startOfDayPrice": "2",
    "endOfDayprice": "4",
    "market": ["US", "Europe"],
    "shareHolders": [
        {"name": "Randy"},
         {"name": "David"},
          {"name": "Josh"},
           {"name": "Joe"},
            {"name": "Michael"},
    ]
}

# print(stonks["name"])
# print(stonks["ticker"])
# # can you add dividends as a key vallue (value is $1)
# stonks["dividends"] = 1
# # if already there, it gets updated. if not, it makes a new key
# # print the first shareholder's name
# print(stonks["shareHolders"][0]["name"])


# 1. print out a list of engine choices (the whole list) X
# 2. print out the horsepower values only (all of them)
# 3. check to see if the key value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
car = {
    "model": "Infiniti G37S",
    "image": "",
    "year": "2009",
    "engineChoices": [

        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],

}

# print (car["engineChoices"])
# for i in range(len(car["engineChoices"])):
#     print(car["engineChoices"][i])
    # print(car["engineChoices"][engine["horsepower"]])

# print (car["engineChoices"])
for hpValue in car["engineChoices"]:
    for key,value in hpValue.items():
        print(value["horsepower"])