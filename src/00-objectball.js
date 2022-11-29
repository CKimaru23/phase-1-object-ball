const gameObject = () => {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brooke Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                "Ben Gordan": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                }
            }
        }
    }
}

const homePlayers = () => {
    return gameObject().home.players
};

const awayPlayers = () => {
    return gameObject().away.players
};

const allPlayers = () => {
    return Object.assign({}, homePlayers(), awayPlayers())
};

const numPointsScored = (playerName) => {
    const game = gameObject();

    for (let gameKey in game) {
        const teamObject = game[gameKey];
        const playerObject = teamObject.players;

        for (let playerKey in playerObject) {

            if (playerKey === playerName) {
                return playerObject[playerKey].points;
            }
        }
    }
}

const shoeSize = (playerName) => {
    const game = gameObject();

    for (let gameKey in game) {
        const playerObject = game[gameKey].players;

        for (let playerKey in playerObject) {

            if (playerKey === playerName) {
                return playerObject[playerKey].shoe;
            }
        }
    }
}

const teamColors = (teamsName) => {
    const game = gameObject();
    const colorArray = [];

    for (let gameKey in game) {
        const team = game[gameKey];

        if (team.teamName === teamsName) {
            colorArray.push(team.colors.split(', '));
        }
    }

    return colorArray;
}

const teamNames = () => {
    const game = gameObject();
    const teamArr = [];

    for (let gameKey in game) {
        const team = game[gameKey];
        teamArr.push(team.teamName)
    }

    return teamArr;
}

const playerNumbers = (teamName) => {
    const game = gameObject();
    const numberArr = [];

    for (let gameKey in game) {
        const teamsName = game[gameKey].teamName;
        const playerObject = game[gameKey].players;

        if (teamsName === teamName) {
            for (let playerKey in playerObject) {
                numberArr.push(playerObject[playerKey].number);
            }
        }
    }

    return numberArr;
}

const playerStats = (playerName) => {
    const game = gameObject();
    
    for (const gameKey in game) {
        const playerObject = game[gameKey].players;
        
        for (const playerKey in playerObject) {

            if (playerKey === playerName) {
                return playerObject[playerKey];
            }
        }
    }
}

const bigShoeRebounds = () => {
    const game = gameObject();
    
    for (let shoeSize = 30; shoeSize > 0; shoeSize --){

        for (const gameKey in game) {
            const playerObject = game[gameKey].players;

            for (const playerKey in playerObject) {

                if (playerObject[playerKey].shoe === shoeSize) {

                    return playerObject[playerKey].number;
                }
            }
        }
    }
}

const mostPointsScored = () => {
    let game = gameObject();
    let points = 0;
    let playerName;
    for(let gameKey in game){
        let team = game[gameKey];
        locatePlayers = team.players;
        for(let locatePlayersKey in locatePlayers){
        let player = locatePlayers[locatePlayersKey]
        if (player.points >= points){
            points = player.points;
            playerName = locatePlayersKey;
        }
        //debugger
        }
    }
    return playerName;
}
const winningTeam = () => {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    let winningTeam;
    for (let gameKey in game){
        if( homePoints == 0) {
            let team = game[gameKey]
            locatePlayers = team.players;
            for(let locatePlayersKey in locatePlayers){
            let player = locatePlayers[locatePlayersKey]
            homePoints += player.points
            winningTeam = team.teamName
        }
        }
        else if (awayPoints == 0) {
            let team = game[gameKey];
            locatePlayers = team.players;
            for(let locatePlayersKey in locatePlayers){
            let player = locatePlayers[locatePlayersKey]
            awayPoints += player.points
            if (homePoints < awayPoints) {
                winningTeam = team.teamName;
            }
        }
    }
}
return winningTeam;
}
const playerWithLongestName = () => {
    const game = gameObject();
    const players = []
    let nameLength = 0
    let name

    for(let gameKey in game){
        let team = game[gameKey]
        locatePlayers = team.players
        for(let locatePlayersKey in locatePlayers){
        players.push(locatePlayersKey)
        }
    }
    for (i = 0; i < players.length; i++){
        if (players[i].length > nameLength){
            nameLength = players[i].length
            name = players[i]
        }
    }
    return name
}
const doesLongNameStealATon = () => {
    const game = gameObject()
    const players = []
    const steals =[]
    let nameLength = 0
    let name
    let stealsAlot
    for(let gameKey in game){
        let team = game[gameKey]
        locatePlayers = team.players
        for(let locatePlayersKey in locatePlayers){
        players.push(locatePlayersKey)
        player = locatePlayers[locatePlayersKey]
        steals.push(player.steals)
        //debugger
        }
    }
    for (i = 0; i < players.length; i++){
        if (players[i].length > nameLength){
            nameLength = players[i].length
            name = players[i]
            stealsAlot = steals[i]
        }
    }
    if (stealsAlot > 10) {
        return true
    }
    else return false
}