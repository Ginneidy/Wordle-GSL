let status_letters = ["wrong", "missplace", "success"]

const process_world = (world, world_objetive) => {
    let array_result = []

    for (let i = 0; i < world.length; i++) {
        let char = world[i]
        let index = world_objetive.indexOf(char)
        if (index != -1) {
            if (world_objetive[i] == char) {
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
        results: array_result,
        complete: world == world_objetive
    }
}


const renderize_results = (results, attemp) => {
    for (let i = 0; i < results.length; i++) {
        index =  i + 1
        id = attemp + "_" +  "otp" + index

        element =  document.getElementById(id)
        element.classList.add( status_letters[i] );
    } 
} 

export default {process_world , renderize_results}
