
function process_world(world, world_objetive){
    let array_result = []

    for (let i = 0; i < world.length; i++) {
        let char =  world[i]
        let index = world_objetive.indexOf(char)
        if ( index !=  -1){
            if (world_objetive[i] == char){
                array_result.push(2)
            }
            else {
                array_result.push(1)
            }
        }
        else {
            array_result.push(0)
        }
    }

    return {
        results : array_result,
        complete : world == world_objetive
    }
}


export default process_world