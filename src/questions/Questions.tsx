const questions: { [key: string]: number[][][][][] } = {
  questionsDividend: [
    //topicIndex 0: 2-digit dividend
    [
      //learningToolIndex 0 : 1-digit divisor
      [
        //stage 0
        [
          [4, 6],
          [8, 2],
          [9, 6],
        ],
        //stage 1
        [
          [3, 5],
          [8, 2],
          [9, 5],
        ],
        //stage 2
        [
          [1, 2],
          [2, 8],
          [5, 4],
        ],
        //stage 3
        [
          [1, 3],
          [3, 1],
          [4, 6],
        ],
      ],
      //learningToolIndex 1 : 2-digit divisor
      [
        //stage 0
        [
          [6, 0],
          [9, 0],
          [8, 0],
        ],
        //stage 1
        [
          [2, 2],
          [3, 6],
          [9, 6],
        ],
        //stage 2
        [
          [2, 9],
          [6, 5],
          [8, 9],
        ],
        //stage 3
        [
          [5, 2],
          [8, 0],
          [8, 7],
        ],
        //stage 4
        [
          [5, 3],
          [8, 2],
          [9, 2],
        ],
      ],
      //learningToolIndex 2 : 3-digit divisor
      [
        //stage 0
        [
          [6, 7],
          [8, 3],
          [5, 9],
        ],
      ],
    ],
    //topicIndex 1: 3-digit dividend
    [
      //learningToolIndex 0 : 1-digit divisor
      [
        //stage 0
        [
          [4, 6, 2],
          [9, 3, 9],
          [8, 4, 4],
        ],
        //stage 1
        [
          [4, 3, 9],
          [7, 2, 4],
          [9, 9, 5],
        ],
        //stage 2
        [
          [6, 0, 8],
          [8, 0, 4],
          [3, 0, 9],
        ],
        //stage 3
        [
          [1, 8, 9],
          [2, 4, 8],
          [4, 8, 6],
        ],
        //stage 4
        [
          [2, 5, 1],
          [4, 9, 9],
          [7, 6, 2],
        ],
      ],
      //learningToolIndex 1 : 2-digit divisor
      [
        //stage 0
        [
          [9, 3, 0],
          [4, 8, 0],
          [3, 4, 0],
        ],
        //stage 1
        [
          [5, 0, 8],
          [5, 6, 7],
          [7, 7, 1],
        ],
        //stage 2
        [
          [5, 6, 7],
          [9, 6, 6],
          [6, 0, 8],
        ],
        //stage 3
        [
          [8, 1, 3],
          [9, 1, 9],
          [7, 0, 2],
        ],
        //stage 4
        [
          [1, 2, 0],
          [3, 5, 0],
          [4, 2, 0],
        ],
        //stage 5
        [
          [1, 8, 3],
          [2, 0, 8],
          [4, 9, 8],
        ],
        //stage 6
        [
          [3, 0, 0],
          [5, 6, 4],
          [4, 1, 9],
        ],
      ],
      //learningToolIndex 2 : 3-digit divisor
      [
        //stage 0
        [
          [9, 3, 0],
          [4, 8, 3],
          [3, 4, 0],
        ],
      ],
    ],
    //topicIndex 2: 4-digit dividend
    [[], [], []],
    //topicIndex 3: 5-digit dividend
    [[], [], []],
  ],
  questionsDivisor: [
    //topicIndex 0: 2-digit dividend
    [
      //learningToolIndex 0 : 1-digit divisor
      [
        //stage 0
        [[2], [2], [3]],
        //stage 1
        [[2], [3], [7]],
        //stage 2
        [[4], [7], [9]],
        //stage 3
        [[2], [4], [7]],
      ],
      //learningToolIndex 1 : 2-digit divisor
      [
        //stage 0
        [
          [1, 0],
          [3, 0],
          [4, 0],
        ],
        //stage 1
        [
          [1, 1],
          [1, 2],
          [3, 2],
        ],
        //stage 2
        [
          [1, 2],
          [3, 1],
          [4, 3],
        ],
        //stage 3
        [
          [1, 3],
          [1, 6],
          [2, 9],
        ],
        //stage 4
        [
          [1, 5],
          [3, 7],
          [4, 5],
        ],
      ],
      //learningToolIndex 2 : 3-digit divisor
      [
        //stage 0
        [
          [1, 1, 1],
          [4, 6, 3],
          [2, 9, 1],
        ],
      ],
    ],
    //topicIndex 1: 3-digit dividend
    [
      //learningToolIndex 0 : 1-digit divisor
      [
        //stage 0
        [[2], [3], [4]],
        //stage 1
        [[3], [5], [8]],
        //stage 2
        [[2], [4], [3]],
        //stage 3
        [[9], [8], [6]],
        //stage 4
        [[6], [5], [9]],
      ],
      //learningToolIndex 1 : 2-digit divisor
      [
        //stage 0
        [
          [3, 1],
          [2, 4],
          [1, 7],
        ],
        //stage 1
        [
          [2, 5],
          [1, 4],
          [3, 8],
        ],
        //stage 2
        [
          [2, 7],
          [4, 6],
          [1, 9],
        ],
        //stage 3
        [
          [3, 8],
          [2, 9],
          [1, 7],
        ],
        //stage 4
        [
          [6, 0],
          [5, 0],
          [7, 0],
        ],
        //stage 5
        [
          [6, 1],
          [5, 2],
          [8, 3],
        ],
        //stage 6
        [
          [3, 8],
          [7, 7],
          [4, 9],
        ],
      ],
      //learningToolIndex 2 : 3-digit divisor
      [
        //stage 0
        [
          [3, 1, 0],
          [1, 6, 1],
          [2, 9, 5],
        ],
      ],
    ],
    //topicIndex 2: 4-digit dividend
    [[], [], []],
    //topicIndex 3: 5-digit dividend
    [[], [], []],
  ],
};

export default questions;
