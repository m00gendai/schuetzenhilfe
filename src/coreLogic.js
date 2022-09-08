export function getTargetPosition(e, element){
    const width = element.getBoundingClientRect().width
    const height =  element.getBoundingClientRect().height
    const sizeConstant = width/100
    const xCoordinate = (e.nativeEvent.offsetX/sizeConstant)*2
    const yCoordinate = (e.nativeEvent.offsetY/sizeConstant)*2
    return [xCoordinate, yCoordinate]
}

export function setTargetPosition(coordinates){
    const element = document.getElementById("targetContainer")
    const width = element.getBoundingClientRect().width
    const height =  element.getBoundingClientRect().height
    const sizeConstant = width/100
    const xCoordinate = (coordinates[0]/2)*sizeConstant
    const yCoordinate = (coordinates[1]/2)*sizeConstant
    return [xCoordinate, yCoordinate]
}

export function setRandomTargetPosition(){
    const randomX = Math.floor(Math.random()*201) 
    const randomY = Math.floor(Math.random()*201) 
    return [randomX, randomY]
}

export function calculateHit(hitPosition){
    const x = hitPosition[0]
    const y = hitPosition[1]
    const distToCenter = Math.floor(Math.sqrt((Math.pow((x-100),2)+Math.pow((y-100),2))))
	const hit = 100-distToCenter
    return hit
}