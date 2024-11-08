{
  //

  type Circle = {
    shape: 'circle';
    radius: number;
  }

  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number
  }

  const calculateShapeArea = (shape : Circle | Rectangle) : number => {
    if (shape.shape === "circle") {
      const circleValue =  Math.PI * shape.radius * shape.radius;
      return circleValue
    } else if (shape.shape === "rectangle") {
      const rectangleValue =  shape.width * shape.height;
      return rectangleValue
    } else {
      return 0;
    }
    
  };

  const circleArea: number = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea: number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);
  

  //
}
