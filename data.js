var vertices = [

    /*
        HURUF N 
    */

    //GARIS TEGAN NIRI
    -0.3, -0.2, 0.0, //0
    -0.3, 0.4, 0.0, //1
    -0.2, 0.4, 0.0, //2
    -0.2, -0.2, 0.0, //3

    //GARIS MIRING

    //2
    0.0 , 0.0 , 0.0, //4
    0, -0.2, 0.0, //5
    -0.2, 0.2, 0.0, //6


    //GARIS TEGAN NANAN

    //5
    0, 0.4, 0.0, //7
    0.1, 0.4, 0.0, //8
    0.1, -0.2, 0.0, //9


    /*
        HURUF L
    */

   //GARIS TEGAN NIRI
    0.2, -0.2,0.0, //10
    0.2, 0.4, 0.0, //11
    0.3, 0.4,0.0, //12
    0.3, -0.2,0.0, //13

    //GARIS HORIZONTAL
    //13
    0.3, -0.1, 0.0, //14
    0.45, -0.1, 0.0, //15
    0.45, -0.2, 0.0, //16
    
    
    
    
    /* DEPAN 
        HURUF N 
    */
    
    //GARIS TEGAN NIRI
    -0.3, -0.2, 0.25, //0
    -0.3, 0.4, 0.25, //1
    -0.2, 0.4, 0.25, //2
    -0.2, -0.2, 0.25, //3
    
    //GARIS MIRING
    
    //2
    0.0 , 0.0 , 0.25, //4
    0, -0.2, 0.25, //5
    -0.2, 0.2, 0.25, //6
    
    
    //GARIS TEGAN NANAN
    
    //5
    0, 0.4, 0.25, //7
    0.1, 0.4, 0.25, //8
    0.1, -0.2, 0.25, //9
    
    
    /*
        HURUF L
    */
    
    //GARIS TEGAN NIRI
    0.2, -0.2,0.25, //10
    0.2, 0.4, 0.25, //11
    0.3, 0.4,0.25, //12
    0.3, -0.2,0.25, //13
    
    //GARIS HORIZONTAL
    //13
    0.3, -0.1, 0.25, //14
    0.45, -0.1, 0.25, //15
    0.45, -0.2, 0.25, //16
]

var colors = [
    1.0, 0.0, 0.0, 1.0, // Red (for vertices 0-3)
    1.0, 0.0, 0.0, 1.0, // Red (for vertices 4-6)
    1.0, 0.0, 0.0, 1.0, // Red (for vertices 7-9)
    0.0, 0.0, 1.0, 1.0, // Blue (for vertices 10-13)
    0.0, 0.0, 1.0, 1.0, // Blue (for vertices 14-16)

    1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0,
    1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0,
    0.0, 0.0, 1.0, 1.0,

    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,

    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,

    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,

    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0, // Green (for side vertices)
    1.0, 1.0, 0.0, 1.0,
 ];

var indices = [
    //N tegak kiri
    0,1,2, 0,2,3,

    //N miring
    2,4,5, 2,5,6,

    //N tegak kanan
    5,7,8, 5,8,9,

    //L tegak kiri
    10,11,12, 10,12,13,

    //L horizontal
    13,14,15, 13,15,16,

    
    // 3D Depan

    //N tegak kiri
    0+17,1+17,2+17, 0+17,2+17,3+17,

    //N miring
    2+17,4+17,5+17, 2+17,5+17,6+17,

    //N tegak kanan
    5+17,7+17,8+17, 5+17,8+17,9+17,

    //L tegak kiri
    10+17,11+17,12+17, 10+17,12+17,13+17,

    //L horizontal
    13+17,14+17,15+17, 13+17,15+17,16+17,

    // 3D samping

    //N tegak kiri sisi kiri
    0,0+17,1+17, 0,1+17,1,

    //N tegak kiri atas
    1,1+17,2+17, 1,2+17,2,

    //N tegak kiri sisi kanan
    3,3+17,6+17, 3,6+17,6,

    //N tegak kiri bawah
    0,0+17,3+17, 0,3+17,3,

    // N miring bawah
    6,5+17,5, 6,6+17,5+17,

    //N miring atas
    2,2+17,4+17, 2,4+17,4,

    //N tegak kanan samping kiri
    4,4+17,7+17, 4,7+17,7,

    //N tegak kanan atas
    7,7+17,8+17, 7,8+17,8,

    //N tegak kanan samping kanan
    5,5+17,9+17, 5,9+17,9,

    //N tegak kanan bawah
    4,4+17,5+17, 4,5+17,5,

    //L tegak kiri samping kiri
    10,10+17,11+17, 10,11+17,11,

    //L tegak kiri atas
    11,11+17,12+17, 11,12+17,12,

    //L tegak kiri samping kanan
    12,12+17,14+17, 12,14+17,14,

    //L tegak bawah
    10,10+17,13+17, 10,13+17,13,

    //L horizontal atas
    14,14+17,15+17, 14,15+17,15,

    //L horizontal kanan
    15,15+17,16+17, 15,16+17,16,

    //L horizontal bawah
    13,13+17,16+17, 13,16+17,16,
    
]