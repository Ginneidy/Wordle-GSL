let status_letters = ["wrong", "missplaced", "success"]

export const process_world = (world, world_objetive) => {
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

export const renderize_results = (results, attemp, word) => {

    for (let i = 0; i < results.length; i++) {
        let index =  i + 1
        let id = attemp + "_" +  "otp" + index

        const element =  document.getElementById(id)
        element.classList.add( status_letters[results[i]] );
        // console.log(element);
        element.value = word[i]
        element.setAttribute("style", "display: block;");
    } 
} 

// export default {process_world , renderize_results}
