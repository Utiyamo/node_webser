'use strict';

let fila = [];
let no = {
    id: null
}

let dimensoesMapa = {
    x: null,
    y: null,
    maxWalls: null,
    walls: [],
    rato: {
        x: null,
        y: null
    },
    queijo: {
        x: null,
        y: null
    }
}

let mapa = [];

module.exports = function(server){
    server.post("/", function(req, res, next){
        console.log('Iniciou');

        const body = req.body;

        if(body === undefined || body === null){
            res.send("Message: body not present");
            return next();
        }

        dimensoesMapa.x = body.x;
        dimensoesMapa.y = body.y;
        dimensoesMapa.rato.x = body.rato.x;
        dimensoesMapa.rato.y = body.rato.y;
        dimensoesMapa.queijo.x = body.queijo.x;
        dimensoesMapa.queijo.y = body.queijo.y;

        let walls = (dimensoesMapa.x * dimensoesMapa.y) / 3;

        walls = Math.floor(walls);

        for(let i = 0; i < walls; i++){
            let repet = false;
            let wallx = Math.floor(Math.random() * (dimensoesMapa.x - 0 + 1)) + 0;
            let wally = Math.floor(Math.random() * (dimensoesMapa.y - 0 + 1)) + 0;

            dimensoesMapa.walls.map((wall) => {
                if(wall.x === wallx && wall.y === wally){
                    i--;
                    repet = true;
                    break;
                }
                else if(wall.x === dimensoesMapa.queijo.x && wall.y === dimensoesMapa.queijo.y){
                    i--
                    repet = true;
                    break;
                }
                else if(wall.x === dimensoesMapa.rato.x && wall.y === dimensoesMapa.rato.y){
                    i--;
                    repet = true;
                    break;
                }
            });

            if(repet)
                continue;

            const wall = {
                x: wallx,
                y: wally,
                value: -1
            }

            dimensoesMapa.walls.push(wall);
        }

        for(let i = 0; i < dimensoesMapa.x; i++){
            for(let y = 0; y < dimensoesMapa.y; y++){
                let object = {
                    x: i,
                    y: y,
                    value: 0
                };

                if(object.x === dimensoesMapa.rato.x && object.y === dimensoesMapa.rato.y)
                    object.value = -999;
                else if(object.x === dimensoesMapa.queijo.x && object.y === dimensoesMapa.queijo.y)
                    object.value = 999;
                else{
                    dimensoesMapa.walls.map((wall) => {
                        if(object.x === wall.x && object.y === wall.y){
                            object.value = wall.value;
                            break;
                        }
                    });
                }
                
                mapa.push(object);
            }
        }

        res.status(200).json(JSON.parse(JSON.stringify(dimensoesMapa)));
    });
}