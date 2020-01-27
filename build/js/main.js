//= other.js

let main = {

    variables: {
        log: {
            start: '',
            end: '',
            moveNumber: 0
        },
        target: { // Cобытие originalEvent: MouseEvent, type: "click" на выбранное поле и его координата.
            id: '',
            name: ''
        },
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        pieces: {

            w_king: {
                position: '5_1', // x_y
                img: '&#9812;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_king'
            },
            w_queen: {
                position: '4_1',
                img: '&#9813;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_queen'
            },
            w_bishop1: {
                position: '3_1',
                img: '&#9815;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_bishop2: {
                position: '6_1',
                img: '&#9815;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_knight1: {
                position: '2_1',
                img: '&#9816;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_knight2: {
                position: '7_1',
                img: '&#9816;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_rook1: {
                position: '1_1',
                img: '&#9814;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_rook2: {
                position: '8_1',
                img: '&#9814;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_pawn1: {
                position: '1_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn2: {
                position: '2_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn3: {
                position: '3_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn4: {
                position: '4_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn5: {
                position: '5_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn6: {
                position: '6_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn7: {
                position: '7_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn8: {
                position: '8_2',
                img: '&#9817;',
                trigger: false,
                captured: false,
                type: 'w_pawn',
                moved: false
            },

            b_king: {
                position: '5_8',
                img: '&#9818;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_king'
            },
            b_queen: {
                position: '4_8',
                img: '&#9819;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_queen'
            },
            b_bishop1: {
                position: '3_8',
                img: '&#9821;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_bishop2: {
                position: '6_8',
                img: '&#9821;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_knight1: {
                position: '2_8',
                img: '&#9822;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_knight2: {
                position: '7_8',
                img: '&#9822;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_rook1: {
                position: '1_8',
                img: '&#9820;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_rook2: {
                position: '8_8',
                img: '&#9820;',
                trigger: false,
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_pawn1: {
                position: '1_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn2: {
                position: '2_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn3: {
                position: '3_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn4: {
                position: '4_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn5: {
                position: '5_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn6: {
                position: '6_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn7: {
                position: '7_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn8: {
                position: '8_7',
                img: '&#9823;',
                trigger: false,
                captured: false,
                type: 'b_pawn',
                moved: false
            }

        }
    },

    methods: {
        //Ключ с функцией задающий в div с классом ".gamecell" атрибут "chess" со значениями "null" если ничего не должно быть или значение ключа "pieces" (w_pawn1).
        // Расставляем фигуры.
        gamesetup: function () {
            $('.gamecell').attr('chess', 'null');
            for (let gamepiece in main.variables.pieces) {
                $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
                $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
            }
        },

        moveoptions: function (selectedpiece) {
            // выбранная фигура и её координаты в "selectedpiece" приходит "type" (w_pawn1) фигуры.
            // split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
            // Получаем координаты выбранной фигуры.
            let position = { x: '', y: '' };

            function triggerValue() {
                for (var key in main.variables.pieces) {
                    if (key.indexOf(selectedpiece) + 1) {
                        if (main.variables.pieces[selectedpiece].trigger == true) {
                            return true // Если trigger = false - не трансформированная из пешки фигура.
                        }
                    }
                } return false // Если ничего не найдено.
            }

            position.x = main.variables.pieces[selectedpiece].position.split('_')[0]; // ключ position первое значение (w_pawn1 и position: '1_2').
            position.y = main.variables.pieces[selectedpiece].position.split('_')[1]; // ключ position второе значение.
            var startpoint = main.variables.pieces[selectedpiece].position;


            // Здесь необходимо использовать var вместо let
            var options = [];
            var coordinates = [];
            // var startpoint = main.variables.pieces[selectedpiece].position;
            var c1, c2, c3, c4, c5, c6, c7, c8;

            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted); // Если массив "highlighted" не пустой выполняется подсветка возможных ходов, иначе - ниже.
            }
            // Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
            // Функция parseInt() принимает СТРОКУ в качестве аргумента и возвращает ЦЕЛОЕ ЧИСЛО в соответствии с указанным основанием системы счисления.

            // Сократим запись 2-мя функциями.
            function nonLinearFigureAction() {
                options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                main.variables.highlighted = options.slice(0);
                main.methods.togglehighlight(options);
            }
            function linearFigureAction() {
                options = coordinates.slice(0);
                main.variables.highlighted = options.slice(0);
                main.methods.togglehighlight(options);
            }
            //Изменить для случая трансформированной фигуры
            switch (main.variables.pieces[selectedpiece].type) {


                case 'w_king':

                    // Для короткой и длинной рокировки.
                    if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false && $('#4_1').attr('chess') == 'null' && $('#3_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook1'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0 }, { x: -2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                        nonLinearFigureAction();
                        return
                    }
                    // Для короткой рокировки.
                    if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                        nonLinearFigureAction();
                        return
                    }
                    // Для длинной рокировки.
                    if ($('#4_1').attr('chess') == 'null' && $('#3_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook1'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: -2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                        nonLinearFigureAction();
                        return
                    }

                    else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    nonLinearFigureAction();

                    break;
                case 'b_king':

                    // Для короткой и длинной рокировки.
                    if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false && $('#4_8').attr('chess') == 'null' && $('#3_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook1'].moved == false) {
                        coordinates = [{ x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: 2, y: 0 }, { x: -2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                        nonLinearFigureAction();
                        return
                    }
                    // Для короткой рокировки.
                    if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: 2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                        nonLinearFigureAction();
                        return
                    }
                    // Для длинной рокировки.
                    if ($('#4_8').attr('chess') == 'null' && $('#3_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook1'].moved == false) {
                        coordinates = [{ x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -2, y: 0 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                        nonLinearFigureAction();
                        return
                    }

                    else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    nonLinearFigureAction();

                    break;
                case 'w_queen':

                    c1 = main.methods.w_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.w_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.w_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.w_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.w_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.w_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.w_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.w_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    linearFigureAction();

                    break;
                case 'b_queen':

                    c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    linearFigureAction();

                    break;

                case 'w_bishop':

                    c1 = main.methods.w_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.w_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.w_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.w_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    linearFigureAction();

                    break;

                case 'b_bishop':

                    c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    linearFigureAction();
                    break;
                case 'w_knight':

                    coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    nonLinearFigureAction();

                    break;
                case 'b_knight':

                    coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function (val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    nonLinearFigureAction();

                    break;
                case 'w_rook':

                    c1 = main.methods.w_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.w_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.w_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.w_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    linearFigureAction();

                    break;
                case 'b_rook':

                    c1 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    linearFigureAction();

                    break;
                case 'w_pawn':
                    // Правило для пешки с прыжком на два поля с изначальной позиции.
                    if (main.variables.pieces[selectedpiece].moved == false) {
                        // Задаются возможные для хода поля в данный момент (coordinates = ["5_3", "5_4", "6_3", "4_3"].
                        coordinates = [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }
                    // Правило для пешки без прыжка на два поля с изначальной позиции.
                    else if (main.variables.pieces[selectedpiece].moved == true) {
                        coordinates = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }
                    // Метод slice() возвращает новый массив, содержащий копию части исходного массива.
                    // Добавляем подсвечиваемые координаты.
                    nonLinearFigureAction();

                    break;

                case 'b_pawn':

                    // calculate pawn options.
                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }
                    else if (main.variables.pieces[selectedpiece].moved == true) {

                        coordinates = [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function (val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    nonLinearFigureAction();

                    break;

            }
        },

        options: function (startpoint, coordinates, piecetype) { // Сначала проверяем, находится ли какая-либо из возможных координат за границами доски.

            coordinates = coordinates.filter(val => { // координата из объекта "coordinates"  ("5_3").
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // Если не за границей доски, вернуть координату (&& возвращает первое true).
                    return val;
                }
            });

            switch (piecetype) {

                case 'w_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                    });

                    break;
                case 'b_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                    });

                    break;
                case 'w_knight':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'b');
                    });

                    break;

                case 'b_knight':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0, 1) == 'w');
                    });

                    break;

                case 'w_pawn':
                    // Убираем невозможные ходы.
                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) { // Если координата находится слева или справа от центра, проверяем, есть ли на нем фигура противника.
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0, 1) == 'b'); // возвращаем координаты с фигурами противника на них.
                        } else { // иначе, если координата находится в центре.
                            if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null') {
                                // ничего не делаем, если это первый ход пешки, а перед 2-й координатой есть фигура.
                            } else {
                                return ($('#' + val).attr('chess') == 'null'); // в противном случае возвращаем координату, если на ней нет шахматной фигуры.
                            }
                        }

                    });

                    break;

                case 'b_pawn':

                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) { // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0, 1) == 'w'); // return coordinates with opponent pieces on them
                        } else { // else if the coordinate is in the center;
                            if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null') {
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }
                    });

                    break;
            }

            return coordinates; // Координаты полей возможных ходов (подсвечиваются).
        },

        w_options: function (position, coordinates) {

            let flag = false;

            coordinates = coordinates.map(function (val) { // преобразовать x, y в фактические координаты - id.
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // Если не за границей доски, вернуть координату (&& возвращает первое true).
                    return val;
                }
            }).filter(val => { // алгоритм определения параметров движения по линии прямой видимости для bishop/rook/queen.
                if (flag == false) {
                    if ($('#' + val).attr('chess') == 'null') {
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'b') {
                        flag = true;
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'w') {
                        console.log(val + '-3')
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        b_options: function (position, coordinates) {

            let flag = false;

            coordinates = coordinates.map(function (val) { // преобразовать x, y в фактические координаты - id.
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // Если не за границей доски, вернуть координату (&& возвращает первое true).
                    return val;
                }
            }).filter(val => { // алгоритм определения параметров движения по линии прямой видимости для bishop/rook/queen.
                if (flag == false) {
                    if ($('#' + val).attr('chess') == 'null') {
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'w') {
                        flag = true;
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0, 1) == 'b') {
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        // Удаление захваченной фигуры.
        capture: function (target) {

            let selectedpiece = {
                name: $('#' + main.variables.selectedpiece).attr('chess'),
                id: main.variables.selectedpiece
            };


            //new cell
            $('#' + target.id).html(main.variables.pieces[selectedpiece.name].img);
            $('#' + target.id).attr('chess', selectedpiece.name);
            //old cell
            $('#' + selectedpiece.id).html('');
            $('#' + selectedpiece.id).attr('chess', 'null');
            //moved piece
            main.variables.pieces[selectedpiece.name].position = target.id;
            main.variables.pieces[selectedpiece.name].moved = true;
            // captured piece
            main.variables.pieces[target.name].captured = true;
        },

        pawntransform: function (target) {
            var currentFigure = {
                name: '',
                newName: '',
                type: {
                    w_queen: "&#9813;",
                    b_queen: "&#9819;",
                    w_rook: "&#9814;",
                    b_rook: "&#9820;",
                    w_knight: "&#9816;",
                    b_knight: "&#9822;",
                    w_bishop: "&#9815;",
                    b_bishop: "&#9821;"
                },
            }

            function movePawn() {
                let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess'); // Фигура которой ходим. 
                main.variables.log.start = main.variables.pieces[selectedpiece].position; // Загружаем в лог начальную позицию.
                getSelectedFigure(); // Получили значение selected figure ("w_pawn5").

                $('#' + target.id).html(currentFigure.type[currentFigure.name]); // Показываем изображение фигуры на новом поле.

                delete main.variables.pieces[main.variables.target.name];     // Удалить фигуру как объект.

                $('#' + main.variables.selectedpiece).html(''); // Через .html() заменяем значение фигуры в div с id=main.variables.selectedpiece на '' и убираем изображение пешки.
                $('#' + main.variables.selectedpiece).attr('chess', 'null'); // Старое поле оставляем пустым.

                // Необходимо создать объект в массиве в который будут добавляться новые трансформированные фигуры.
                mergingNewNameFigure();
                main.variables.pieces[currentFigure.newName] = {
                    position: '',
                    img: currentFigure.type[currentFigure.name],
                    trigger: false,
                    captured: false,
                    moved: false,
                    type: currentFigure.name
                };

                $('#' + target.id).attr('chess', currentFigure.newName); // Задаём атрибут выбранной фигуры типу "chess" в новом div.
                main.variables.pieces[currentFigure.newName].position = target.id; // Заменяем кооринату selected figure на текущую.
                main.variables.log.end = main.variables.pieces[currentFigure.newName].position; // Загружаем в лог конечную позицию фигуры.
                main.variables.pieces[currentFigure.newName].trigger = true; // Если функция pawntransform отработала, то trigger = true.
                // main.variables.pieces[target.name].captured = true;  // для capture

                function mergingNewNameFigure() {
                    currentFigure.newName = currentFigure.name + numberIdenticalFigure()
                }

                function numberIdenticalFigure() { // сколько раз повторяется, выбранная для трансформации фигура.
                    var allTransformFigures = [];
                    for (var key in main.variables.pieces) { // Добавляем все фигуры из объекта pieces перебором его ключей в массив.
                        allTransformFigures.push(key);
                    }
                    // Ищем сколько раз в массиве "allTransformFigures" встречается выбранная для трансформации фигура.
                    var arr2 = [];
                    for (i in allTransformFigures) {
                        if (allTransformFigures[i].indexOf(currentFigure.name) + 1) {// Ищем число повторений только для выбранной (для трансформации) фигуры (пытаемся её найти среди массива фигур).

                            if (arr2[currentFigure.name] != undefined) { // Если массив пустой - мы должны начать с какого-либо значения, поэтому ставим arr2[allTransformFigures[i]] = 1;
                                arr2[currentFigure.name]++;
                            }
                            else {
                                arr2[currentFigure.name] = 1;
                            }
                        }
                    }
                    if (currentFigure.name == "w_rook" || currentFigure.name == "b_rook" || currentFigure.name == "w_knight" || currentFigure.name == "b_knight" || currentFigure.name == "w_bishop" || currentFigure.name == "b_bishop") {
                        arr2[currentFigure.name]++; // Называем ладью, коня, слона, с цифры 3 - "w_rook3" (кроме ферзя).
                    }
                    allTransformFigures.length = 0;
                    // if (isNaN(arr2[currentFigure.name])) {
                    //   return 1;
                    // } else return arr2[currentFigure.name];
                    return arr2[currentFigure.name];
                }
            }

            function getSelectedFigure() {
                let f;
                let value = $('.change-figure').val();
                switch (value) {
                    case 'Q':
                        f = '_queen';
                        break;
                    case 'R':
                        f = '_rook';
                        break;
                    case 'N':
                        f = '_knight';
                        break;
                    case 'B':
                        f = '_bishop';
                        break;
                    default:
                        console.log('Выбери из четырёх фигур');
                }
                return currentFigure.name = main.variables.turn + f;
            }

            // Проверка пешка ли это.
            if (main.variables.target.name.indexOf('pawn') + 1) {
                let y;
                y = parseInt(main.variables.target.id.split('_')[1]);
                if (y == 1 || y == 8) {
                    // Редактированную функцию  main.methods.move(target);
                    movePawn();
                    main.methods.endturn();
                    return false
                } else return true
            } else return true
        },

        // Функция сравнивает id div-a по кторрому я кликнул для перемещения фигуры, с массивом highlighted возможных ходов.
        // Выдаёт true или false.
        canmove: function () {
            if (main.variables.selectedpiece == main.variables.target.id) { return false } // Если координата поля на котором сработало событие originalEvent: MouseEvent, type: "click" равна позици фигуры которой будем ходить - return, иначе продолжить.
            else {
                var arr = [];
                main.variables.highlighted.forEach(function (element) {
                    arr.push(main.variables.target.id == element); // Ищем наличие координаты поля, на которое выбрали ходить,  в массиве возможных ходов.
                });
                if (($.inArray(true, arr)) == parseInt("-1")) { return false } // Если в массиве возможных ходов ничего не найдено "-1" - return false, иначе return true.
                else { return true }
            }
        },

        itPawn: function () {
            if (main.variables.target.name.indexOf('pawn') + 1) {
                let y;
                y = parseInt(main.variables.target.id.split('_')[1]);
                if (y == 1 || y == 8) {
                    return false
                } else return true
            } else return true
        },

        move: function (target) {
            let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');
            main.variables.log.start = main.variables.pieces[selectedpiece].position; // Загружаем в лог начальную позицию.

            $('#' + target.id).html(main.variables.pieces[selectedpiece].img); // Перемещение фигуры на новое поле.
            $('#' + target.id).attr('chess', selectedpiece); // Задаём атрибут выбранной фигуры типу "chess" в новом div.
            // Через .html() заменяем значение фигуры в div с id=main.variables.selectedpiece на ''.
            $('#' + main.variables.selectedpiece).html('');
            $('#' + main.variables.selectedpiece).attr('chess', 'null'); // Старое поле оставляем пустым.
            main.variables.pieces[selectedpiece].position = target.id; // Заменяем кооринату фигуры на текущую.
            main.variables.log.end = main.variables.pieces[selectedpiece].position; // Загружаем в лог конечную позицию фигуры.
            main.variables.pieces[selectedpiece].moved = true;
        },

        endturn: function () {

            if (main.variables.turn == 'w') {
                main.variables.turn = 'b';

                // toggle highlighted coordinates.
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;
                // Очищаем массив с координатами, подсвечиваемых полей. И ключ в объекте  main.variables.target с выбранным полем.
                main.variables.selectedpiece = '';
                main.variables.target.id = '';
                main.methods.writelog();
                main.methods.scrollbottom();

                $('#turn').html("Ход Чёрных");
                $('#turn').removeClass('white');
                $('#turn').addClass('black');
                // Сюда вставить таймер

            } else if (main.variables.turn = 'b') {
                main.variables.turn = 'w';

                // toggle highlighted coordinates.
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;
                // Очищаем массив с координатами, подсвечиваемых полей.
                main.variables.selectedpiece = '';
                main.variables.target.id = '';
                main.methods.writelog();
                main.methods.scrollbottom();

                $('#turn').html("Ход Белых");
                $('#turn').removeClass('black');
                $('#turn').addClass('white');
                // Сюда вставить таймер
            }

        },

        writelog: function () { // Лог игры 
            // Метод charAt() возвращает указанный символ из строки.
            function clearLogStartEnd() {
                main.variables.log.start = "";
                main.variables.log.end = "";
            }
            function writelogWhiteTurn() {
                $('#game-log').append('<p>');
                $('#game-log>p:last-child').append('&#160;' + T + '&#160;');
                K = "&#160;";
                main.variables.log.moveNumber = main.variables.log.moveNumber + 2;
                clearLogStartEnd();
                return
            }
            function writelogBlackTurn() {
                $('#game-log>p:last-child').append('&#160;' + T + '&#160;');
                K = "&#160;";
                clearLogStartEnd();
                return
            }

            var startPositionFigure = main.variables.log.start;
            var endPositionFigure = main.variables.log.end;
            var K = "&#160;";
            var T;
            var j = "abcdefgh";

            // При рокировке.
            if (startPositionFigure == "0-0" || startPositionFigure == "0-0-0") {
                // Белые сделали ход
                if (main.variables.turn == 'b') { // Ставим 'b' так как изменения в main.variables.turn УЖЕ произведены, а "функция" writelog выполняется после этих изменений.
                    K = K + ((2 + main.variables.log.moveNumber) >> 1) + ". "; // 0 >> 1 = 0,   1 >> 1 = 0,   2 >> 1 = 1,   3 >> 1 = 1,   4 >> 1 = 2.
                    // >> - Сдвигает двоичное представление числа a на b разрядов вправо. Освобождающиеся разряды заполняются  знаковым битом.
                    T = K + startPositionFigure;
                    writelogWhiteTurn();
                }

                // Чёрные сделали ход
                if (main.variables.turn == 'w') {
                    K = "&#160;&#160;";
                    T = K + startPositionFigure;
                    writelogBlackTurn();
                }
                return
            }

            var x = parseInt(startPositionFigure.split('_')[0]),
                y = parseInt(startPositionFigure.split('_')[1]),
                X = parseInt(endPositionFigure.split('_')[0]),
                Y = parseInt(endPositionFigure.split('_')[1]);

            // Белые сделали ход
            if (main.variables.turn == 'b') { // Ставим 'b' так как изменения в main.variables.turn УЖЕ произведены, а "функция" writelog выполняется после этих изменений.
                K = K + ((2 + main.variables.log.moveNumber) >> 1) + ". "; // 0 >> 1 = 0,   1 >> 1 = 0,   2 >> 1 = 1,   3 >> 1 = 1,   4 >> 1 = 2.
                T = K + j.charAt(x - 1) + (y) + "&#45;" + j.charAt(X - 1) + (Y);
                writelogWhiteTurn();
            }

            // Чёрные сделали ход
            if (main.variables.turn == 'w') {
                K = "&#160;&#160;";
                T = K + j.charAt(x - 1) + (y) + "&#45;" + j.charAt(X - 1) + (Y);
                writelogBlackTurn();
            }
        },

        // Скролл в "#game-log" привязан к низу.
        scrollbottom: function () {
            let block = document.getElementById("game-log");
            block.scrollTop = block.scrollHeight;
        },

        // Подсветка возможных ходов.
        togglehighlight: function (options) {
            // Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
            options.forEach(function (element, index, array) {
                $('#' + element).toggleClass("true-move");
            });
        }

    }
};








// Движение фигур
$(document).ready(function () {
    main.methods.gamesetup();
    // click() привязывает JavaScript обработчик событий "click" (клик левой кнопкой мыши), или запускает это событие на выбранный элемент. Левая кнопка мыши нажата, когда курсор находился внутри элемента. Левая кнопка мыши отпущена пока курсор находится внутри элемента.
    $('.gamecell').click(function (e) {

        var selectedpiece = {
            name: '',
            id: main.variables.selectedpiece
        };

        if (main.variables.selectedpiece == '') {
            selectedpiece.name = $('#' + e.target.id).attr('chess');
        } else {
            selectedpiece.name = $('#' + main.variables.selectedpiece).attr('chess');
        }

        var target = {
            name: $(this).attr('chess'),
            id: e.target.id // Привязываем к событию originalEvent: MouseEvent, type: "click", присваивание значения "id" (5_2) к ключу id в объекте target.
        };
        main.variables.target.id = target.id;
        if (!(target.name == "null")) { // Для записи pieces (w_pawn5) в main.variables.target.name, + исключить перезапись "null"-ом.
            main.variables.target.name = target.name;
        }

        if (main.variables.selectedpiece == '' && target.name.slice(0, 1) == main.variables.turn) {

            // moveoptions.
            main.variables.selectedpiece = e.target.id;
            main.methods.moveoptions($(this).attr('chess'));
            // Рокировка от сюда.
        } else if (main.variables.selectedpiece != '' && target.name == 'null') { // Перемещаем выбранную фигуру

            if (selectedpiece.name == 'w_king' || selectedpiece.name == 'b_king') {

                let t0 = (selectedpiece.name == 'w_king');
                let t1 = (selectedpiece.name == 'b_king');
                let t2 = (main.variables.pieces[selectedpiece.name].moved == false);
                let t3 = (main.variables.pieces['b_rook2'].moved == false);
                let t4 = (main.variables.pieces['w_rook2'].moved == false);
                let t5 = (target.id == '7_8');
                let t6 = (target.id == '7_1');

                let t7 = (main.variables.pieces['b_rook1'].moved == false);
                let t8 = (main.variables.pieces['w_rook1'].moved == false);
                let t9 = (target.id == '3_8');
                let t10 = (target.id == '3_1');

                if (t9 || t10) { // ДЛИННАЯ рокировка (для различия длинной и короткой рокировок).
                    if (t0 && t2 && t8 && t10) { // w_king.

                        let k_position = '5_1';
                        let k_target = '3_1';
                        let r_position = '1_1';
                        let r_target = '4_1';

                        main.variables.pieces['w_king'].position = '3_1';
                        main.variables.pieces['w_king'].moved = true;
                        $('#' + k_position).html('');
                        $('#' + k_position).attr('chess', 'null');
                        $('#' + k_target).html(main.variables.pieces['w_king'].img);
                        $('#' + k_target).attr('chess', 'w_king');

                        main.variables.pieces['w_rook1'].position = '4_1';
                        main.variables.pieces['w_rook1'].moved = true;
                        $('#' + r_position).html('');
                        $('#' + r_position).attr('chess', 'null');
                        $('#' + r_target).html(main.variables.pieces['w_rook1'].img);
                        $('#' + r_target).attr('chess', 'w_rook1');

                        main.variables.log.start = '0-0-0';
                        main.methods.endturn();

                    } else if (t1 && t2 && t7 && t9) { // b_king.

                        let k_position = '5_8';
                        let k_target = '3_8';
                        let r_position = '1_8';
                        let r_target = '4_8';

                        main.variables.pieces['b_king'].position = '3_8';
                        main.variables.pieces['b_king'].moved = true;
                        $('#' + k_position).html('');
                        $('#' + k_position).attr('chess', 'null');
                        $('#' + k_target).html(main.variables.pieces['b_king'].img);
                        $('#' + k_target).attr('chess', 'b_king');

                        main.variables.pieces['b_rook1'].position = '4_8';
                        main.variables.pieces['b_rook1'].moved = true;
                        $('#' + r_position).html('');
                        $('#' + r_position).attr('chess', 'null');
                        $('#' + r_target).html(main.variables.pieces['b_rook1'].img);
                        $('#' + r_target).attr('chess', 'b_rook1');

                        main.variables.log.start = '0-0-0';
                        main.methods.endturn();
                    }
                }

                if (t5 || t6) { // КОРОТКАЯ рокировка (для различия длинной и короткой рокировок).
                    if (t0 && t2 && t4 && t6) { // w_king.

                        let k_position = '5_1';
                        let k_target = '7_1';
                        let r_position = '8_1';
                        let r_target = '6_1';

                        main.variables.pieces['w_king'].position = '7_1';
                        main.variables.pieces['w_king'].moved = true;
                        $('#' + k_position).html('');
                        $('#' + k_position).attr('chess', 'null');
                        $('#' + k_target).html(main.variables.pieces['w_king'].img);
                        $('#' + k_target).attr('chess', 'w_king');

                        main.variables.pieces['w_rook2'].position = '6_1';
                        main.variables.pieces['w_rook2'].moved = true;
                        $('#' + r_position).html('');
                        $('#' + r_position).attr('chess', 'null');
                        $('#' + r_target).html(main.variables.pieces['w_rook2'].img);
                        $('#' + r_target).attr('chess', 'w_rook2');

                        main.variables.log.start = '0-0';
                        main.methods.endturn();

                    } else if (t1 && t2 && t3 && t5) { // b_king.

                        let k_position = '5_8';
                        let k_target = '7_8';
                        let r_position = '8_8';
                        let r_target = '6_8';

                        main.variables.pieces['b_king'].position = '7_8';
                        main.variables.pieces['b_king'].moved = true;
                        $('#' + k_position).html('');
                        $('#' + k_position).attr('chess', 'null');
                        $('#' + k_target).html(main.variables.pieces['b_king'].img);
                        $('#' + k_target).attr('chess', 'b_king');

                        main.variables.pieces['b_rook2'].position = '6_8';
                        main.variables.pieces['b_rook2'].moved = true;
                        $('#' + r_position).html('');
                        $('#' + r_position).attr('chess', 'null');
                        $('#' + r_target).html(main.variables.pieces['b_rook2'].img);
                        $('#' + r_target).attr('chess', 'b_rook2');

                        main.variables.log.start = '0-0';
                        main.methods.endturn();
                    }

                } else { // move selectedpiece.

                    if (main.methods.canmove()) {
                        main.methods.move(target);
                        main.methods.endturn();
                    }
                    else {
                        return
                    }
                }

            } else {

                // иначе, если selecedpiece.name не белый / черный король, тогда вызываем "move".
                if (main.methods.canmove()) {
                    if (main.methods.pawntransform(target)) {
                        main.methods.move(target);
                        main.methods.endturn();
                    }
                } else {
                    return
                }
            }

        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) != target.name.slice(0, 1)) { // capture a piece

            if (selectedpiece.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) { // Если мы не пытаемся захватить фигуры не в диапазоне движения фигуры.

                // capture. Координаты при взятии фигуры.
                main.variables.log.start = main.variables.pieces[selectedpiece.name].position;
                main.variables.log.end = main.variables.pieces[target.name].position;

                if (main.methods.canmove()) {
                    if (main.methods.pawntransform(target)) {
                        main.methods.capture(target)
                        main.methods.endturn();
                    }
                } else return
            }

        } else if (main.variables.selectedpiece != '' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0, 1) == target.name.slice(0, 1)) { // toggle move options.

            // toggle.
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;

            main.variables.selectedpiece = target.id;
            main.methods.moveoptions(target.name);

        }

    });

    // Убираем вызов контестного меню - ПКМ на "доске".
    $('body').contextmenu(function (e) {
        e.preventDefault();
    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vPSBvdGhlci5qc1xyXG5cclxubGV0IG1haW4gPSB7XHJcblxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgbG9nOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiAnJyxcclxuICAgICAgICAgICAgZW5kOiAnJyxcclxuICAgICAgICAgICAgbW92ZU51bWJlcjogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGFyZ2V0OiB7IC8vIEPQvtCx0YvRgtC40LUgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgdHlwZTogXCJjbGlja1wiINC90LAg0LLRi9Cx0YDQsNC90L3QvtC1INC/0L7Qu9C1INC4INC10LPQviDQutC+0L7RgNC00LjQvdCw0YLQsC5cclxuICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICBuYW1lOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHVybjogJ3cnLFxyXG4gICAgICAgIHNlbGVjdGVkcGllY2U6ICcnLFxyXG4gICAgICAgIGhpZ2hsaWdodGVkOiBbXSxcclxuICAgICAgICBwaWVjZXM6IHtcclxuXHJcbiAgICAgICAgICAgIHdfa2luZzoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc1XzEnLCAvLyB4X3lcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgxMjsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd19raW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3X3F1ZWVuOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzRfMScsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MTM7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dfcXVlZW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdfYmlzaG9wMToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICczXzEnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODE1OycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3X2Jpc2hvcCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd19iaXNob3AyOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzZfMScsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MTU7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dfYmlzaG9wJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3X2tuaWdodDE6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnMl8xJyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgxNjsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd19rbmlnaHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdfa25pZ2h0Mjoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc3XzEnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODE2OycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3X2tuaWdodCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd19yb29rMToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICcxXzEnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODE0OycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3X3Jvb2snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdfcm9vazI6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnOF8xJyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgxNDsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd19yb29rJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3X3Bhd24xOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzFfMicsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MTc7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dfcGF3bicsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd19wYXduMjoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICcyXzInLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODE3OycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3X3Bhd24nLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdfcGF3bjM6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnM18yJyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgxNzsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd19wYXduJyxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3X3Bhd240OiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzRfMicsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MTc7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dfcGF3bicsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd19wYXduNToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc1XzInLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODE3OycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3X3Bhd24nLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdfcGF3bjY6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnNl8yJyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgxNzsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd19wYXduJyxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3X3Bhd243OiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzdfMicsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MTc7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dfcGF3bicsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd19wYXduODoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc4XzInLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODE3OycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd3X3Bhd24nLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBiX2tpbmc6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnNV84JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgxODsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYl9raW5nJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiX3F1ZWVuOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzRfOCcsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MTk7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JfcXVlZW4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJfYmlzaG9wMToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICczXzgnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODIxOycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiX2Jpc2hvcCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYl9iaXNob3AyOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzZfOCcsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MjE7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JfYmlzaG9wJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiX2tuaWdodDE6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnMl84JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgyMjsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYl9rbmlnaHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJfa25pZ2h0Mjoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc3XzgnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODIyOycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiX2tuaWdodCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYl9yb29rMToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICcxXzgnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODIwOycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiX3Jvb2snXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJfcm9vazI6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnOF84JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgyMDsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYl9yb29rJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiX3Bhd24xOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzFfNycsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MjM7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JfcGF3bicsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYl9wYXduMjoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICcyXzcnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODIzOycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiX3Bhd24nLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJfcGF3bjM6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnM183JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgyMzsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYl9wYXduJyxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiX3Bhd240OiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzRfNycsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MjM7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JfcGF3bicsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYl9wYXduNToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc1XzcnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODIzOycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiX3Bhd24nLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJfcGF3bjY6IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnNl83JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyYjOTgyMzsnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYl9wYXduJyxcclxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiX3Bhd243OiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJzdfNycsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcmIzk4MjM7JyxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2JfcGF3bicsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYl9wYXduODoge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICc4XzcnLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJiM5ODIzOycsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdiX3Bhd24nLFxyXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy/QmtC70Y7RhyDRgSDRhNGD0L3QutGG0LjQtdC5INC30LDQtNCw0Y7RidC40Lkg0LIgZGl2INGBINC60LvQsNGB0YHQvtC8IFwiLmdhbWVjZWxsXCIg0LDRgtGA0LjQsdGD0YIgXCJjaGVzc1wiINGB0L4g0LfQvdCw0YfQtdC90LjRj9C80LggXCJudWxsXCIg0LXRgdC70Lgg0L3QuNGH0LXQs9C+INC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC40LvQuCDQt9C90LDRh9C10L3QuNC1INC60LvRjtGH0LAgXCJwaWVjZXNcIiAod19wYXduMSkuXHJcbiAgICAgICAgLy8g0KDQsNGB0YHRgtCw0LLQu9GP0LXQvCDRhNC40LPRg9GA0YsuXHJcbiAgICAgICAgZ2FtZXNldHVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5nYW1lY2VsbCcpLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZ2FtZXBpZWNlIGluIG1haW4udmFyaWFibGVzLnBpZWNlcykge1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBtYWluLnZhcmlhYmxlcy5waWVjZXNbZ2FtZXBpZWNlXS5wb3NpdGlvbikuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbZ2FtZXBpZWNlXS5pbWcpO1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBtYWluLnZhcmlhYmxlcy5waWVjZXNbZ2FtZXBpZWNlXS5wb3NpdGlvbikuYXR0cignY2hlc3MnLCBnYW1lcGllY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW92ZW9wdGlvbnM6IGZ1bmN0aW9uIChzZWxlY3RlZHBpZWNlKSB7XHJcbiAgICAgICAgICAgIC8vINCy0YvQsdGA0LDQvdC90LDRjyDRhNC40LPRg9GA0LAg0Lgg0LXRkSDQutC+0L7RgNC00LjQvdCw0YLRiyDQsiBcInNlbGVjdGVkcGllY2VcIiDQv9GA0LjRhdC+0LTQuNGCIFwidHlwZVwiICh3X3Bhd24xKSDRhNC40LPRg9GA0YsuXHJcbiAgICAgICAgICAgIC8vIHNwbGl0KCkg0YDQsNC30LHQuNCy0LDQtdGCINC+0LHRitC10LrRgiBTdHJpbmcg0L3QsCDQvNCw0YHRgdC40LIg0YHRgtGA0L7QuiDQv9GD0YLRkdC8INGA0LDQt9C00LXQu9C10L3QuNGPINGB0YLRgNC+0LrQuCDRg9C60LDQt9Cw0L3QvdC+0Lkg0L/QvtC00YHRgtGA0L7QutC+0LkuXHJcbiAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LLRi9Cx0YDQsNC90L3QvtC5INGE0LjQs9GD0YDRiy5cclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0geyB4OiAnJywgeTogJycgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyaWdnZXJWYWx1ZSgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtYWluLnZhcmlhYmxlcy5waWVjZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoc2VsZWN0ZWRwaWVjZSkgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluLnZhcmlhYmxlcy5waWVjZXNbc2VsZWN0ZWRwaWVjZV0udHJpZ2dlciA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSAvLyDQldGB0LvQuCB0cmlnZ2VyID0gZmFsc2UgLSDQvdC1INGC0YDQsNC90YHRhNC+0YDQvNC40YDQvtCy0LDQvdC90LDRjyDQuNC3INC/0LXRiNC60Lgg0YTQuNCz0YPRgNCwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSByZXR1cm4gZmFsc2UgLy8g0JXRgdC70Lgg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC50LTQtdC90L4uXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPSBtYWluLnZhcmlhYmxlcy5waWVjZXNbc2VsZWN0ZWRwaWVjZV0ucG9zaXRpb24uc3BsaXQoJ18nKVswXTsgLy8g0LrQu9GO0YcgcG9zaXRpb24g0L/QtdGA0LLQvtC1INC30L3QsNGH0LXQvdC40LUgKHdfcGF3bjEg0LggcG9zaXRpb246ICcxXzInKS5cclxuICAgICAgICAgICAgcG9zaXRpb24ueSA9IG1haW4udmFyaWFibGVzLnBpZWNlc1tzZWxlY3RlZHBpZWNlXS5wb3NpdGlvbi5zcGxpdCgnXycpWzFdOyAvLyDQutC70Y7RhyBwb3NpdGlvbiDQstGC0L7RgNC+0LUg0LfQvdCw0YfQtdC90LjQtS5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0cG9pbnQgPSBtYWluLnZhcmlhYmxlcy5waWVjZXNbc2VsZWN0ZWRwaWVjZV0ucG9zaXRpb247XHJcblxyXG5cclxuICAgICAgICAgICAgLy8g0JfQtNC10YHRjCDQvdC10L7QsdGF0L7QtNC40LzQviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgdmFyINCy0LzQtdGB0YLQviBsZXRcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGNvb3JkaW5hdGVzID0gW107XHJcbiAgICAgICAgICAgIC8vIHZhciBzdGFydHBvaW50ID0gbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB2YXIgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4O1xyXG5cclxuICAgICAgICAgICAgaWYgKG1haW4udmFyaWFibGVzLmhpZ2hsaWdodGVkLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluLm1ldGhvZHMudG9nZ2xlaGlnaGxpZ2h0KG1haW4udmFyaWFibGVzLmhpZ2hsaWdodGVkKTsgLy8g0JXRgdC70Lgg0LzQsNGB0YHQuNCyIFwiaGlnaGxpZ2h0ZWRcIiDQvdC1INC/0YPRgdGC0L7QuSDQstGL0L/QvtC70L3Rj9C10YLRgdGPINC/0L7QtNGB0LLQtdGC0LrQsCDQstC+0LfQvNC+0LbQvdGL0YUg0YXQvtC00L7Qsiwg0LjQvdCw0YfQtSAtINC90LjQttC1LlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vINCc0LXRgtC+0LQgbWFwKCkg0YHQvtC30LTQsNGR0YIg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LIg0YEg0YDQtdC30YPQu9GM0YLQsNGC0L7QvCDQstGL0LfQvtCy0LAg0YPQutCw0LfQsNC90L3QvtC5INGE0YPQvdC60YbQuNC4INC00LvRjyDQutCw0LbQtNC+0LPQviDRjdC70LXQvNC10L3RgtCwINC80LDRgdGB0LjQstCwLlxyXG4gICAgICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyBwYXJzZUludCgpINC/0YDQuNC90LjQvNCw0LXRgiDQodCi0KDQntCa0KMg0LIg0LrQsNGH0LXRgdGC0LLQtSDQsNGA0LPRg9C80LXQvdGC0LAg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0KbQldCb0J7QlSDQp9CY0KHQm9CeINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDRg9C60LDQt9Cw0L3QvdGL0Lwg0L7RgdC90L7QstCw0L3QuNC10Lwg0YHQuNGB0YLQtdC80Ysg0YHRh9C40YHQu9C10L3QuNGPLlxyXG5cclxuICAgICAgICAgICAgLy8g0KHQvtC60YDQsNGC0LjQvCDQt9Cw0L/QuNGB0YwgMi3QvNGPINGE0YPQvdC60YbQuNGP0LzQuC5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbm9uTGluZWFyRmlndXJlQWN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IChtYWluLm1ldGhvZHMub3B0aW9ucyhzdGFydHBvaW50LCBjb29yZGluYXRlcywgbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLnR5cGUpKS5zbGljZSgwKTtcclxuICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLmhpZ2hsaWdodGVkID0gb3B0aW9ucy5zbGljZSgwKTtcclxuICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy50b2dnbGVoaWdobGlnaHQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gbGluZWFyRmlndXJlQWN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGNvb3JkaW5hdGVzLnNsaWNlKDApO1xyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMuaGlnaGxpZ2h0ZWQgPSBvcHRpb25zLnNsaWNlKDApO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLnRvZ2dsZWhpZ2hsaWdodChvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL9CY0LfQvNC10L3QuNGC0Ywg0LTQu9GPINGB0LvRg9GH0LDRjyDRgtGA0LDQvdGB0YTQvtGA0LzQuNGA0L7QstCw0L3QvdC+0Lkg0YTQuNCz0YPRgNGLXHJcbiAgICAgICAgICAgIHN3aXRjaCAobWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLnR5cGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnd19raW5nJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQu9GPINC60L7RgNC+0YLQutC+0Lkg0Lgg0LTQu9C40L3QvdC+0Lkg0YDQvtC60LjRgNC+0LLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjNl8xJykuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgJiYgJCgnIzdfMScpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnICYmIG1haW4udmFyaWFibGVzLnBpZWNlc1snd19raW5nJ10ubW92ZWQgPT0gZmFsc2UgJiYgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X3Jvb2syJ10ubW92ZWQgPT0gZmFsc2UgJiYgJCgnIzRfMScpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnICYmICQoJyMzXzEnKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyAmJiBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfa2luZyddLm1vdmVkID09IGZhbHNlICYmIG1haW4udmFyaWFibGVzLnBpZWNlc1snd19yb29rMSddLm1vdmVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3sgeDogMSwgeTogMSB9LCB7IHg6IDEsIHk6IDAgfSwgeyB4OiAtMSwgeTogMCB9LCB7IHg6IC0xLCB5OiAxIH0sIHsgeDogMCwgeTogMSB9LCB7IHg6IDIsIHk6IDAgfSwgeyB4OiAtMiwgeTogMCB9XS5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChwb3NpdGlvbi54KSArIHBhcnNlSW50KHZhbC54KSkgKyAnXycgKyAocGFyc2VJbnQocG9zaXRpb24ueSkgKyBwYXJzZUludCh2YWwueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFyRmlndXJlQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LrQvtGA0L7RgtC60L7QuSDRgNC+0LrQuNGA0L7QstC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyM2XzEnKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyAmJiAkKCcjN18xJykuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgJiYgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X2tpbmcnXS5tb3ZlZCA9PSBmYWxzZSAmJiBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfcm9vazInXS5tb3ZlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDEsIHk6IDEgfSwgeyB4OiAxLCB5OiAwIH0sIHsgeDogLTEsIHk6IDAgfSwgeyB4OiAtMSwgeTogMSB9LCB7IHg6IDAsIHk6IDEgfSwgeyB4OiAyLCB5OiAwIH1dLm1hcChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBvc2l0aW9uLngpICsgcGFyc2VJbnQodmFsLngpKSArICdfJyArIChwYXJzZUludChwb3NpdGlvbi55KSArIHBhcnNlSW50KHZhbC55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub25MaW5lYXJGaWd1cmVBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQtNC70LjQvdC90L7QuSDRgNC+0LrQuNGA0L7QstC60LguXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyM0XzEnKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyAmJiAkKCcjM18xJykuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgJiYgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X2tpbmcnXS5tb3ZlZCA9PSBmYWxzZSAmJiBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfcm9vazEnXS5tb3ZlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDEsIHk6IDEgfSwgeyB4OiAxLCB5OiAwIH0sIHsgeDogLTEsIHk6IDAgfSwgeyB4OiAtMSwgeTogMSB9LCB7IHg6IDAsIHk6IDEgfSwgeyB4OiAtMiwgeTogMCB9XS5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChwb3NpdGlvbi54KSArIHBhcnNlSW50KHZhbC54KSkgKyAnXycgKyAocGFyc2VJbnQocG9zaXRpb24ueSkgKyBwYXJzZUludCh2YWwueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFyRmlndXJlQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3sgeDogMSwgeTogMSB9LCB7IHg6IDEsIHk6IDAgfSwgeyB4OiAxLCB5OiAtMSB9LCB7IHg6IDAsIHk6IC0xIH0sIHsgeDogLTEsIHk6IC0xIH0sIHsgeDogLTEsIHk6IDAgfSwgeyB4OiAtMSwgeTogMSB9LCB7IHg6IDAsIHk6IDEgfV0ubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocG9zaXRpb24ueCkgKyBwYXJzZUludCh2YWwueCkpICsgJ18nICsgKHBhcnNlSW50KHBvc2l0aW9uLnkpICsgcGFyc2VJbnQodmFsLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vbkxpbmVhckZpZ3VyZUFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jfa2luZyc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCU0LvRjyDQutC+0YDQvtGC0LrQvtC5INC4INC00LvQuNC90L3QvtC5INGA0L7QutC40YDQvtCy0LrQuC5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnIzZfOCcpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnICYmICQoJyM3XzgnKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyAmJiBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfa2luZyddLm1vdmVkID09IGZhbHNlICYmIG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9yb29rMiddLm1vdmVkID09IGZhbHNlICYmICQoJyM0XzgnKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyAmJiAkKCcjM184JykuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgJiYgbWFpbi52YXJpYWJsZXMucGllY2VzWydiX2tpbmcnXS5tb3ZlZCA9PSBmYWxzZSAmJiBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfcm9vazEnXS5tb3ZlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDEsIHk6IDAgfSwgeyB4OiAxLCB5OiAtMSB9LCB7IHg6IDAsIHk6IC0xIH0sIHsgeDogLTEsIHk6IC0xIH0sIHsgeDogLTEsIHk6IDAgfSwgeyB4OiAyLCB5OiAwIH0sIHsgeDogLTIsIHk6IDAgfV0ubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocG9zaXRpb24ueCkgKyBwYXJzZUludCh2YWwueCkpICsgJ18nICsgKHBhcnNlSW50KHBvc2l0aW9uLnkpICsgcGFyc2VJbnQodmFsLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbkxpbmVhckZpZ3VyZUFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JTQu9GPINC60L7RgNC+0YLQutC+0Lkg0YDQvtC60LjRgNC+0LLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjNl84JykuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgJiYgJCgnIzdfOCcpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnICYmIG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9raW5nJ10ubW92ZWQgPT0gZmFsc2UgJiYgbWFpbi52YXJpYWJsZXMucGllY2VzWydiX3Jvb2syJ10ubW92ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeyB4OiAxLCB5OiAwIH0sIHsgeDogMSwgeTogLTEgfSwgeyB4OiAwLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAwIH0sIHsgeDogMiwgeTogMCB9XS5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChwb3NpdGlvbi54KSArIHBhcnNlSW50KHZhbC54KSkgKyAnXycgKyAocGFyc2VJbnQocG9zaXRpb24ueSkgKyBwYXJzZUludCh2YWwueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFyRmlndXJlQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDQlNC70Y8g0LTQu9C40L3QvdC+0Lkg0YDQvtC60LjRgNC+0LLQutC4LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcjNF84JykuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgJiYgJCgnIzNfOCcpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnICYmIG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9raW5nJ10ubW92ZWQgPT0gZmFsc2UgJiYgbWFpbi52YXJpYWJsZXMucGllY2VzWydiX3Jvb2sxJ10ubW92ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeyB4OiAxLCB5OiAwIH0sIHsgeDogMSwgeTogLTEgfSwgeyB4OiAwLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAwIH0sIHsgeDogLTIsIHk6IDAgfV0ubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocG9zaXRpb24ueCkgKyBwYXJzZUludCh2YWwueCkpICsgJ18nICsgKHBhcnNlSW50KHBvc2l0aW9uLnkpICsgcGFyc2VJbnQodmFsLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbkxpbmVhckZpZ3VyZUFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDEsIHk6IDEgfSwgeyB4OiAxLCB5OiAwIH0sIHsgeDogMSwgeTogLTEgfSwgeyB4OiAwLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAwIH0sIHsgeDogLTEsIHk6IDEgfSwgeyB4OiAwLCB5OiAxIH1dLm1hcChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBvc2l0aW9uLngpICsgcGFyc2VJbnQodmFsLngpKSArICdfJyArIChwYXJzZUludChwb3NpdGlvbi55KSArIHBhcnNlSW50KHZhbC55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub25MaW5lYXJGaWd1cmVBY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd3X3F1ZWVuJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYzEgPSBtYWluLm1ldGhvZHMud19vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAxLCB5OiAxIH0sIHsgeDogMiwgeTogMiB9LCB7IHg6IDMsIHk6IDMgfSwgeyB4OiA0LCB5OiA0IH0sIHsgeDogNSwgeTogNSB9LCB7IHg6IDYsIHk6IDYgfSwgeyB4OiA3LCB5OiA3IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjMiA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDEsIHk6IC0xIH0sIHsgeDogMiwgeTogLTIgfSwgeyB4OiAzLCB5OiAtMyB9LCB7IHg6IDQsIHk6IC00IH0sIHsgeDogNSwgeTogLTUgfSwgeyB4OiA2LCB5OiAtNiB9LCB7IHg6IDcsIHk6IC03IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjMyA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IC0xLCB5OiAxIH0sIHsgeDogLTIsIHk6IDIgfSwgeyB4OiAtMywgeTogMyB9LCB7IHg6IC00LCB5OiA0IH0sIHsgeDogLTUsIHk6IDUgfSwgeyB4OiAtNiwgeTogNiB9LCB7IHg6IC03LCB5OiA3IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjNCA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IC0yLCB5OiAtMiB9LCB7IHg6IC0zLCB5OiAtMyB9LCB7IHg6IC00LCB5OiAtNCB9LCB7IHg6IC01LCB5OiAtNSB9LCB7IHg6IC02LCB5OiAtNiB9LCB7IHg6IC03LCB5OiAtNyB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzUgPSBtYWluLm1ldGhvZHMud19vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAxLCB5OiAwIH0sIHsgeDogMiwgeTogMCB9LCB7IHg6IDMsIHk6IDAgfSwgeyB4OiA0LCB5OiAwIH0sIHsgeDogNSwgeTogMCB9LCB7IHg6IDYsIHk6IDAgfSwgeyB4OiA3LCB5OiAwIH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjNiA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAwLCB5OiAyIH0sIHsgeDogMCwgeTogMyB9LCB7IHg6IDAsIHk6IDQgfSwgeyB4OiAwLCB5OiA1IH0sIHsgeDogMCwgeTogNiB9LCB7IHg6IDAsIHk6IDcgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGM3ID0gbWFpbi5tZXRob2RzLndfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogLTEsIHk6IDAgfSwgeyB4OiAtMiwgeTogMCB9LCB7IHg6IC0zLCB5OiAwIH0sIHsgeDogLTQsIHk6IDAgfSwgeyB4OiAtNSwgeTogMCB9LCB7IHg6IC02LCB5OiAwIH0sIHsgeDogLTcsIHk6IDAgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGM4ID0gbWFpbi5tZXRob2RzLndfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogMCwgeTogLTEgfSwgeyB4OiAwLCB5OiAtMiB9LCB7IHg6IDAsIHk6IC0zIH0sIHsgeDogMCwgeTogLTQgfSwgeyB4OiAwLCB5OiAtNSB9LCB7IHg6IDAsIHk6IC02IH0sIHsgeDogMCwgeTogLTcgfV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGMxLmNvbmNhdChjMikuY29uY2F0KGMzKS5jb25jYXQoYzQpLmNvbmNhdChjNSkuY29uY2F0KGM2KS5jb25jYXQoYzcpLmNvbmNhdChjOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhckZpZ3VyZUFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JfcXVlZW4nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjMSA9IG1haW4ubWV0aG9kcy5iX29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDEsIHk6IDEgfSwgeyB4OiAyLCB5OiAyIH0sIHsgeDogMywgeTogMyB9LCB7IHg6IDQsIHk6IDQgfSwgeyB4OiA1LCB5OiA1IH0sIHsgeDogNiwgeTogNiB9LCB7IHg6IDcsIHk6IDcgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGMyID0gbWFpbi5tZXRob2RzLmJfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogMSwgeTogLTEgfSwgeyB4OiAyLCB5OiAtMiB9LCB7IHg6IDMsIHk6IC0zIH0sIHsgeDogNCwgeTogLTQgfSwgeyB4OiA1LCB5OiAtNSB9LCB7IHg6IDYsIHk6IC02IH0sIHsgeDogNywgeTogLTcgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGMzID0gbWFpbi5tZXRob2RzLmJfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogLTEsIHk6IDEgfSwgeyB4OiAtMiwgeTogMiB9LCB7IHg6IC0zLCB5OiAzIH0sIHsgeDogLTQsIHk6IDQgfSwgeyB4OiAtNSwgeTogNSB9LCB7IHg6IC02LCB5OiA2IH0sIHsgeDogLTcsIHk6IDcgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGM0ID0gbWFpbi5tZXRob2RzLmJfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogLTEsIHk6IC0xIH0sIHsgeDogLTIsIHk6IC0yIH0sIHsgeDogLTMsIHk6IC0zIH0sIHsgeDogLTQsIHk6IC00IH0sIHsgeDogLTUsIHk6IC01IH0sIHsgeDogLTYsIHk6IC02IH0sIHsgeDogLTcsIHk6IC03IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjNSA9IG1haW4ubWV0aG9kcy5iX29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDEsIHk6IDAgfSwgeyB4OiAyLCB5OiAwIH0sIHsgeDogMywgeTogMCB9LCB7IHg6IDQsIHk6IDAgfSwgeyB4OiA1LCB5OiAwIH0sIHsgeDogNiwgeTogMCB9LCB7IHg6IDcsIHk6IDAgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGM2ID0gbWFpbi5tZXRob2RzLmJfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogMCwgeTogMSB9LCB7IHg6IDAsIHk6IDIgfSwgeyB4OiAwLCB5OiAzIH0sIHsgeDogMCwgeTogNCB9LCB7IHg6IDAsIHk6IDUgfSwgeyB4OiAwLCB5OiA2IH0sIHsgeDogMCwgeTogNyB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzcgPSBtYWluLm1ldGhvZHMuYl9vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAtMSwgeTogMCB9LCB7IHg6IC0yLCB5OiAwIH0sIHsgeDogLTMsIHk6IDAgfSwgeyB4OiAtNCwgeTogMCB9LCB7IHg6IC01LCB5OiAwIH0sIHsgeDogLTYsIHk6IDAgfSwgeyB4OiAtNywgeTogMCB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzggPSBtYWluLm1ldGhvZHMuYl9vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAwLCB5OiAtMSB9LCB7IHg6IDAsIHk6IC0yIH0sIHsgeDogMCwgeTogLTMgfSwgeyB4OiAwLCB5OiAtNCB9LCB7IHg6IDAsIHk6IC01IH0sIHsgeDogMCwgeTogLTYgfSwgeyB4OiAwLCB5OiAtNyB9XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gYzEuY29uY2F0KGMyKS5jb25jYXQoYzMpLmNvbmNhdChjNCkuY29uY2F0KGM1KS5jb25jYXQoYzYpLmNvbmNhdChjNykuY29uY2F0KGM4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyRmlndXJlQWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dfYmlzaG9wJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYzEgPSBtYWluLm1ldGhvZHMud19vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAxLCB5OiAxIH0sIHsgeDogMiwgeTogMiB9LCB7IHg6IDMsIHk6IDMgfSwgeyB4OiA0LCB5OiA0IH0sIHsgeDogNSwgeTogNSB9LCB7IHg6IDYsIHk6IDYgfSwgeyB4OiA3LCB5OiA3IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjMiA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDEsIHk6IC0xIH0sIHsgeDogMiwgeTogLTIgfSwgeyB4OiAzLCB5OiAtMyB9LCB7IHg6IDQsIHk6IC00IH0sIHsgeDogNSwgeTogLTUgfSwgeyB4OiA2LCB5OiAtNiB9LCB7IHg6IDcsIHk6IC03IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjMyA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IC0xLCB5OiAxIH0sIHsgeDogLTIsIHk6IDIgfSwgeyB4OiAtMywgeTogMyB9LCB7IHg6IC00LCB5OiA0IH0sIHsgeDogLTUsIHk6IDUgfSwgeyB4OiAtNiwgeTogNiB9LCB7IHg6IC03LCB5OiA3IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjNCA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IC0yLCB5OiAtMiB9LCB7IHg6IC0zLCB5OiAtMyB9LCB7IHg6IC00LCB5OiAtNCB9LCB7IHg6IC01LCB5OiAtNSB9LCB7IHg6IC02LCB5OiAtNiB9LCB7IHg6IC03LCB5OiAtNyB9XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gYzEuY29uY2F0KGMyKS5jb25jYXQoYzMpLmNvbmNhdChjNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhckZpZ3VyZUFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdiX2Jpc2hvcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGMxID0gbWFpbi5tZXRob2RzLmJfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogMSwgeTogMSB9LCB7IHg6IDIsIHk6IDIgfSwgeyB4OiAzLCB5OiAzIH0sIHsgeDogNCwgeTogNCB9LCB7IHg6IDUsIHk6IDUgfSwgeyB4OiA2LCB5OiA2IH0sIHsgeDogNywgeTogNyB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzIgPSBtYWluLm1ldGhvZHMuYl9vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAxLCB5OiAtMSB9LCB7IHg6IDIsIHk6IC0yIH0sIHsgeDogMywgeTogLTMgfSwgeyB4OiA0LCB5OiAtNCB9LCB7IHg6IDUsIHk6IC01IH0sIHsgeDogNiwgeTogLTYgfSwgeyB4OiA3LCB5OiAtNyB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzMgPSBtYWluLm1ldGhvZHMuYl9vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAtMSwgeTogMSB9LCB7IHg6IC0yLCB5OiAyIH0sIHsgeDogLTMsIHk6IDMgfSwgeyB4OiAtNCwgeTogNCB9LCB7IHg6IC01LCB5OiA1IH0sIHsgeDogLTYsIHk6IDYgfSwgeyB4OiAtNywgeTogNyB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzQgPSBtYWluLm1ldGhvZHMuYl9vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAtMSwgeTogLTEgfSwgeyB4OiAtMiwgeTogLTIgfSwgeyB4OiAtMywgeTogLTMgfSwgeyB4OiAtNCwgeTogLTQgfSwgeyB4OiAtNSwgeTogLTUgfSwgeyB4OiAtNiwgeTogLTYgfSwgeyB4OiAtNywgeTogLTcgfV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGMxLmNvbmNhdChjMikuY29uY2F0KGMzKS5jb25jYXQoYzQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJGaWd1cmVBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dfa25pZ2h0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBbeyB4OiAtMSwgeTogMiB9LCB7IHg6IDEsIHk6IDIgfSwgeyB4OiAxLCB5OiAtMiB9LCB7IHg6IC0xLCB5OiAtMiB9LCB7IHg6IDIsIHk6IDEgfSwgeyB4OiAyLCB5OiAtMSB9LCB7IHg6IC0yLCB5OiAtMSB9LCB7IHg6IC0yLCB5OiAxIH1dLm1hcChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocG9zaXRpb24ueCkgKyBwYXJzZUludCh2YWwueCkpICsgJ18nICsgKHBhcnNlSW50KHBvc2l0aW9uLnkpICsgcGFyc2VJbnQodmFsLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFyRmlndXJlQWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYl9rbmlnaHQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IC0xLCB5OiAyIH0sIHsgeDogMSwgeTogMiB9LCB7IHg6IDEsIHk6IC0yIH0sIHsgeDogLTEsIHk6IC0yIH0sIHsgeDogMiwgeTogMSB9LCB7IHg6IDIsIHk6IC0xIH0sIHsgeDogLTIsIHk6IC0xIH0sIHsgeDogLTIsIHk6IDEgfV0ubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChwb3NpdGlvbi54KSArIHBhcnNlSW50KHZhbC54KSkgKyAnXycgKyAocGFyc2VJbnQocG9zaXRpb24ueSkgKyBwYXJzZUludCh2YWwueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub25MaW5lYXJGaWd1cmVBY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd3X3Jvb2snOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjMSA9IG1haW4ubWV0aG9kcy53X29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDEsIHk6IDAgfSwgeyB4OiAyLCB5OiAwIH0sIHsgeDogMywgeTogMCB9LCB7IHg6IDQsIHk6IDAgfSwgeyB4OiA1LCB5OiAwIH0sIHsgeDogNiwgeTogMCB9LCB7IHg6IDcsIHk6IDAgfV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGMyID0gbWFpbi5tZXRob2RzLndfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogMCwgeTogMSB9LCB7IHg6IDAsIHk6IDIgfSwgeyB4OiAwLCB5OiAzIH0sIHsgeDogMCwgeTogNCB9LCB7IHg6IDAsIHk6IDUgfSwgeyB4OiAwLCB5OiA2IH0sIHsgeDogMCwgeTogNyB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzMgPSBtYWluLm1ldGhvZHMud19vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAtMSwgeTogMCB9LCB7IHg6IC0yLCB5OiAwIH0sIHsgeDogLTMsIHk6IDAgfSwgeyB4OiAtNCwgeTogMCB9LCB7IHg6IC01LCB5OiAwIH0sIHsgeDogLTYsIHk6IDAgfSwgeyB4OiAtNywgeTogMCB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzQgPSBtYWluLm1ldGhvZHMud19vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAwLCB5OiAtMSB9LCB7IHg6IDAsIHk6IC0yIH0sIHsgeDogMCwgeTogLTMgfSwgeyB4OiAwLCB5OiAtNCB9LCB7IHg6IDAsIHk6IC01IH0sIHsgeDogMCwgeTogLTYgfSwgeyB4OiAwLCB5OiAtNyB9XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gYzEuY29uY2F0KGMyKS5jb25jYXQoYzMpLmNvbmNhdChjNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhckZpZ3VyZUFjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jfcm9vayc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGMxID0gbWFpbi5tZXRob2RzLmJfb3B0aW9ucyhwb3NpdGlvbiwgW3sgeDogMSwgeTogMCB9LCB7IHg6IDIsIHk6IDAgfSwgeyB4OiAzLCB5OiAwIH0sIHsgeDogNCwgeTogMCB9LCB7IHg6IDUsIHk6IDAgfSwgeyB4OiA2LCB5OiAwIH0sIHsgeDogNywgeTogMCB9XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYzIgPSBtYWluLm1ldGhvZHMuYl9vcHRpb25zKHBvc2l0aW9uLCBbeyB4OiAwLCB5OiAxIH0sIHsgeDogMCwgeTogMiB9LCB7IHg6IDAsIHk6IDMgfSwgeyB4OiAwLCB5OiA0IH0sIHsgeDogMCwgeTogNSB9LCB7IHg6IDAsIHk6IDYgfSwgeyB4OiAwLCB5OiA3IH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjMyA9IG1haW4ubWV0aG9kcy5iX29wdGlvbnMocG9zaXRpb24sIFt7IHg6IC0xLCB5OiAwIH0sIHsgeDogLTIsIHk6IDAgfSwgeyB4OiAtMywgeTogMCB9LCB7IHg6IC00LCB5OiAwIH0sIHsgeDogLTUsIHk6IDAgfSwgeyB4OiAtNiwgeTogMCB9LCB7IHg6IC03LCB5OiAwIH1dKTtcclxuICAgICAgICAgICAgICAgICAgICBjNCA9IG1haW4ubWV0aG9kcy5iX29wdGlvbnMocG9zaXRpb24sIFt7IHg6IDAsIHk6IC0xIH0sIHsgeDogMCwgeTogLTIgfSwgeyB4OiAwLCB5OiAtMyB9LCB7IHg6IDAsIHk6IC00IH0sIHsgeDogMCwgeTogLTUgfSwgeyB4OiAwLCB5OiAtNiB9LCB7IHg6IDAsIHk6IC03IH1dKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjMS5jb25jYXQoYzIpLmNvbmNhdChjMykuY29uY2F0KGM0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyRmlndXJlQWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnd19wYXduJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0LDQstC40LvQviDQtNC70Y8g0L/QtdGI0LrQuCDRgSDQv9GA0YvQttC60L7QvCDQvdCwINC00LLQsCDQv9C+0LvRjyDRgSDQuNC30L3QsNGH0LDQu9GM0L3QvtC5INC/0L7Qt9C40YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluLnZhcmlhYmxlcy5waWVjZXNbc2VsZWN0ZWRwaWVjZV0ubW92ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0JfQsNC00LDRjtGC0YHRjyDQstC+0LfQvNC+0LbQvdGL0LUg0LTQu9GPINGF0L7QtNCwINC/0L7Qu9GPINCyINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIgKGNvb3JkaW5hdGVzID0gW1wiNV8zXCIsIFwiNV80XCIsIFwiNl8zXCIsIFwiNF8zXCJdLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAwLCB5OiAyIH0sIHsgeDogMSwgeTogMSB9LCB7IHg6IC0xLCB5OiAxIH1dLm1hcChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBvc2l0aW9uLngpICsgcGFyc2VJbnQodmFsLngpKSArICdfJyArIChwYXJzZUludChwb3NpdGlvbi55KSArIHBhcnNlSW50KHZhbC55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNCw0LLQuNC70L4g0LTQu9GPINC/0LXRiNC60Lgg0LHQtdC3INC/0YDRi9C20LrQsCDQvdCwINC00LLQsCDQv9C+0LvRjyDRgSDQuNC30L3QsNGH0LDQu9GM0L3QvtC5INC/0L7Qt9C40YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1haW4udmFyaWFibGVzLnBpZWNlc1tzZWxlY3RlZHBpZWNlXS5tb3ZlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gW3sgeDogMCwgeTogMSB9LCB7IHg6IDEsIHk6IDEgfSwgeyB4OiAtMSwgeTogMSB9XS5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChwb3NpdGlvbi54KSArIHBhcnNlSW50KHZhbC54KSkgKyAnXycgKyAocGFyc2VJbnQocG9zaXRpb24ueSkgKyBwYXJzZUludCh2YWwueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCc0LXRgtC+0LQgc2xpY2UoKSDQstC+0LfQstGA0LDRidCw0LXRgiDQvdC+0LLRi9C5INC80LDRgdGB0LjQsiwg0YHQvtC00LXRgNC20LDRidC40Lkg0LrQvtC/0LjRjiDRh9Cw0YHRgtC4INC40YHRhdC+0LTQvdC+0LPQviDQvNCw0YHRgdC40LLQsC5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0L/QvtC00YHQstC10YfQuNCy0LDQtdC80YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiy5cclxuICAgICAgICAgICAgICAgICAgICBub25MaW5lYXJGaWd1cmVBY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYl9wYXduJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHBhd24gb3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLm1vdmVkID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDAsIHk6IC0xIH0sIHsgeDogMCwgeTogLTIgfSwgeyB4OiAxLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAtMSB9XS5tYXAoZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZUludChwb3NpdGlvbi54KSArIHBhcnNlSW50KHZhbC54KSkgKyAnXycgKyAocGFyc2VJbnQocG9zaXRpb24ueSkgKyBwYXJzZUludCh2YWwueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1haW4udmFyaWFibGVzLnBpZWNlc1tzZWxlY3RlZHBpZWNlXS5tb3ZlZCA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IFt7IHg6IDAsIHk6IC0xIH0sIHsgeDogMSwgeTogLTEgfSwgeyB4OiAtMSwgeTogLTEgfV0ubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocG9zaXRpb24ueCkgKyBwYXJzZUludCh2YWwueCkpICsgJ18nICsgKHBhcnNlSW50KHBvc2l0aW9uLnkpICsgcGFyc2VJbnQodmFsLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uTGluZWFyRmlndXJlQWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9wdGlvbnM6IGZ1bmN0aW9uIChzdGFydHBvaW50LCBjb29yZGluYXRlcywgcGllY2V0eXBlKSB7IC8vINCh0L3QsNGH0LDQu9CwINC/0YDQvtCy0LXRgNGP0LXQvCwg0L3QsNGF0L7QtNC40YLRgdGPINC70Lgg0LrQsNC60LDRjy3Qu9C40LHQviDQuNC3INCy0L7Qt9C80L7QttC90YvRhSDQutC+0L7RgNC00LjQvdCw0YIg0LfQsCDQs9GA0LDQvdC40YbQsNC80Lgg0LTQvtGB0LrQuC5cclxuXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuZmlsdGVyKHZhbCA9PiB7IC8vINC60L7QvtGA0LTQuNC90LDRgtCwINC40Lcg0L7QsdGK0LXQutGC0LAgXCJjb29yZGluYXRlc1wiICAoXCI1XzNcIikuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgICAgICAgICBwb3MueCA9IHBhcnNlSW50KHZhbC5zcGxpdCgnXycpWzBdKTtcclxuICAgICAgICAgICAgICAgIHBvcy55ID0gcGFyc2VJbnQodmFsLnNwbGl0KCdfJylbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKHBvcy54IDwgMSkgJiYgIShwb3MueCA+IDgpICYmICEocG9zLnkgPCAxKSAmJiAhKHBvcy55ID4gOCkpIHsgLy8g0JXRgdC70Lgg0L3QtSDQt9CwINCz0YDQsNC90LjRhtC10Lkg0LTQvtGB0LrQuCwg0LLQtdGA0L3Rg9GC0Ywg0LrQvtC+0YDQtNC40L3QsNGC0YMgKCYmINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0LXRgNCy0L7QtSB0cnVlKS5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAocGllY2V0eXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnd19raW5nJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5maWx0ZXIodmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcgfHwgKCQoJyMnICsgdmFsKS5hdHRyKCdjaGVzcycpKS5zbGljZSgwLCAxKSA9PSAnYicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jfa2luZyc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuZmlsdGVyKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnIHx8ICgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSkuc2xpY2UoMCwgMSkgPT0gJ3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd3X2tuaWdodCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuZmlsdGVyKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnIHx8ICgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSkuc2xpY2UoMCwgMSkgPT0gJ2InKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYl9rbmlnaHQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmZpbHRlcih2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCQoJyMnICsgdmFsKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyB8fCAoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykpLnNsaWNlKDAsIDEpID09ICd3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dfcGF3bic6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0KPQsdC40YDQsNC10Lwg0L3QtdCy0L7Qt9C80L7QttC90YvQtSDRhdC+0LTRiy5cclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmZpbHRlcih2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3AgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSB2YWwuc3BsaXQoJ18nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwLnggPSBzdGFydHBvaW50LnNwbGl0KCdfJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwLnkgPSBzdGFydHBvaW50LnNwbGl0KCdfJylbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA8IHNwLnggfHwgY29vcmRpbmF0ZVswXSA+IHNwLngpIHsgLy8g0JXRgdC70Lgg0LrQvtC+0YDQtNC40L3QsNGC0LAg0L3QsNGF0L7QtNC40YLRgdGPINGB0LvQtdCy0LAg0LjQu9C4INGB0L/RgNCw0LLQsCDQvtGCINGG0LXQvdGC0YDQsCwg0L/RgNC+0LLQtdGA0Y/QtdC8LCDQtdGB0YLRjCDQu9C4INC90LAg0L3QtdC8INGE0LjQs9GD0YDQsCDQv9GA0L7RgtC40LLQvdC40LrQsC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykgIT0gJ251bGwnICYmICgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSkuc2xpY2UoMCwgMSkgPT0gJ2InKTsgLy8g0LLQvtC30LLRgNCw0YnQsNC10Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YEg0YTQuNCz0YPRgNCw0LzQuCDQv9GA0L7RgtC40LLQvdC40LrQsCDQvdCwINC90LjRhS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8g0LjQvdCw0YfQtSwg0LXRgdC70Lgg0LrQvtC+0YDQtNC40L3QsNGC0LAg0L3QsNGF0L7QtNC40YLRgdGPINCyINGG0LXQvdGC0YDQtS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzFdID09IChwYXJzZUludChzcC55KSArIDIpICYmICQoJyMnICsgc3AueCArICdfJyArIChwYXJzZUludChzcC55KSArIDEpKS5hdHRyKCdjaGVzcycpICE9ICdudWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXQvCwg0LXRgdC70Lgg0Y3RgtC+INC/0LXRgNCy0YvQuSDRhdC+0LQg0L/QtdGI0LrQuCwg0LAg0L/QtdGA0LXQtCAyLdC5INC60L7QvtGA0LTQuNC90LDRgtC+0Lkg0LXRgdGC0Ywg0YTQuNCz0YPRgNCwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCQoJyMnICsgdmFsKS5hdHRyKCdjaGVzcycpID09ICdudWxsJyk7IC8vINCyINC/0YDQvtGC0LjQstC90L7QvCDRgdC70YPRh9Cw0LUg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LrQvtC+0YDQtNC40L3QsNGC0YMsINC10YHQu9C4INC90LAg0L3QtdC5INC90LXRgiDRiNCw0YXQvNCw0YLQvdC+0Lkg0YTQuNCz0YPRgNGLLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdiX3Bhd24nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmZpbHRlcih2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3AgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSB2YWwuc3BsaXQoJ18nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwLnggPSBzdGFydHBvaW50LnNwbGl0KCdfJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwLnkgPSBzdGFydHBvaW50LnNwbGl0KCdfJylbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA8IHNwLnggfHwgY29vcmRpbmF0ZVswXSA+IHNwLngpIHsgLy8gaWYgdGhlIGNvb3JkaW5hdGUgaXMgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGNlbnRlciwgY2hlY2sgaWYgaXQgaGFzIGFuIG9wcG9uZW50IHBpZWNlIG9uIGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSAhPSAnbnVsbCcgJiYgKCQoJyMnICsgdmFsKS5hdHRyKCdjaGVzcycpKS5zbGljZSgwLCAxKSA9PSAndycpOyAvLyByZXR1cm4gY29vcmRpbmF0ZXMgd2l0aCBvcHBvbmVudCBwaWVjZXMgb24gdGhlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBlbHNlIGlmIHRoZSBjb29yZGluYXRlIGlzIGluIHRoZSBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVsxXSA9PSAocGFyc2VJbnQoc3AueSkgLSAyKSAmJiAkKCcjJyArIHNwLnggKyAnXycgKyAocGFyc2VJbnQoc3AueSkgLSAxKSkuYXR0cignY2hlc3MnKSAhPSAnbnVsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nIGlmIHRoaXMgaXMgdGhlIHBhd25zIGZpcnN0IG1vdmUsIGFuZCB0aGVyZSBpcyBhIHBpZWNlIGluIGZyb250IG9mIHRoZSAybmQgY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSA9PSAnbnVsbCcpOyAvLyBvdGhlcndpc2UgcmV0dXJuIHRoZSBjb29yZGluYXRlIGlmIHRoZXJlIGlzIG5vIGNoZXNzIHBpZWNlIG9uIGl0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7IC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINC/0L7Qu9C10Lkg0LLQvtC30LzQvtC20L3Ri9GFINGF0L7QtNC+0LIgKNC/0L7QtNGB0LLQtdGH0LjQstCw0Y7RgtGB0Y8pLlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHdfb3B0aW9uczogZnVuY3Rpb24gKHBvc2l0aW9uLCBjb29yZGluYXRlcykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHsgLy8g0L/RgNC10L7QsdGA0LDQt9C+0LLQsNGC0YwgeCwgeSDQsiDRhNCw0LrRgtC40YfQtdGB0LrQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLIC0gaWQuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBvc2l0aW9uLngpICsgcGFyc2VJbnQodmFsLngpKSArICdfJyArIChwYXJzZUludChwb3NpdGlvbi55KSArIHBhcnNlSW50KHZhbC55KSk7XHJcbiAgICAgICAgICAgIH0pLmZpbHRlcih2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgICAgICAgICAgcG9zLnggPSBwYXJzZUludCh2YWwuc3BsaXQoJ18nKVswXSk7XHJcbiAgICAgICAgICAgICAgICBwb3MueSA9IHBhcnNlSW50KHZhbC5zcGxpdCgnXycpWzFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIShwb3MueCA8IDEpICYmICEocG9zLnggPiA4KSAmJiAhKHBvcy55IDwgMSkgJiYgIShwb3MueSA+IDgpKSB7IC8vINCV0YHQu9C4INC90LUg0LfQsCDQs9GA0LDQvdC40YbQtdC5INC00L7RgdC60LgsINCy0LXRgNC90YPRgtGMINC60L7QvtGA0LTQuNC90LDRgtGDICgmJiDQstC+0LfQstGA0LDRidCw0LXRgiDQv9C10YDQstC+0LUgdHJ1ZSkuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuZmlsdGVyKHZhbCA9PiB7IC8vINCw0LvQs9C+0YDQuNGC0Lwg0L7Qv9GA0LXQtNC10LvQtdC90LjRjyDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQtNCy0LjQttC10L3QuNGPINC/0L4g0LvQuNC90LjQuCDQv9GA0Y/QvNC+0Lkg0LLQuNC00LjQvNC+0YHRgtC4INC00LvRjyBiaXNob3Avcm9vay9xdWVlbi5cclxuICAgICAgICAgICAgICAgIGlmIChmbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgdmFsKS5hdHRyKCdjaGVzcycpID09ICdudWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykpLnNsaWNlKDAsIDEpID09ICdiJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKCQoJyMnICsgdmFsKS5hdHRyKCdjaGVzcycpKS5zbGljZSgwLCAxKSA9PSAndycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsICsgJy0zJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlcztcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYl9vcHRpb25zOiBmdW5jdGlvbiAocG9zaXRpb24sIGNvb3JkaW5hdGVzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyAvLyDQv9GA0LXQvtCx0YDQsNC30L7QstCw0YLRjCB4LCB5INCyINGE0LDQutGC0LjRh9C10YHQutC40LUg0LrQvtC+0YDQtNC40L3QsNGC0YsgLSBpZC5cclxuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VJbnQocG9zaXRpb24ueCkgKyBwYXJzZUludCh2YWwueCkpICsgJ18nICsgKHBhcnNlSW50KHBvc2l0aW9uLnkpICsgcGFyc2VJbnQodmFsLnkpKTtcclxuICAgICAgICAgICAgfSkuZmlsdGVyKHZhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgICAgICAgICBwb3MueCA9IHBhcnNlSW50KHZhbC5zcGxpdCgnXycpWzBdKTtcclxuICAgICAgICAgICAgICAgIHBvcy55ID0gcGFyc2VJbnQodmFsLnNwbGl0KCdfJylbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKHBvcy54IDwgMSkgJiYgIShwb3MueCA+IDgpICYmICEocG9zLnkgPCAxKSAmJiAhKHBvcy55ID4gOCkpIHsgLy8g0JXRgdC70Lgg0L3QtSDQt9CwINCz0YDQsNC90LjRhtC10Lkg0LTQvtGB0LrQuCwg0LLQtdGA0L3Rg9GC0Ywg0LrQvtC+0YDQtNC40L3QsNGC0YMgKCYmINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0LXRgNCy0L7QtSB0cnVlKS5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5maWx0ZXIodmFsID0+IHsgLy8g0LDQu9Cz0L7RgNC40YLQvCDQvtC/0YDQtdC00LXQu9C10L3QuNGPINC/0LDRgNCw0LzQtdGC0YDQvtCyINC00LLQuNC20LXQvdC40Y8g0L/QviDQu9C40L3QuNC4INC/0YDRj9C80L7QuSDQstC40LTQuNC80L7RgdGC0Lgg0LTQu9GPIGJpc2hvcC9yb29rL3F1ZWVuLlxyXG4gICAgICAgICAgICAgICAgaWYgKGZsYWcgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykgPT0gJ251bGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoJCgnIycgKyB2YWwpLmF0dHIoJ2NoZXNzJykpLnNsaWNlKDAsIDEpID09ICd3Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgkKCcjJyArIHZhbCkuYXR0cignY2hlc3MnKSkuc2xpY2UoMCwgMSkgPT0gJ2InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vINCj0LTQsNC70LXQvdC40LUg0LfQsNGF0LLQsNGH0LXQvdC90L7QuSDRhNC40LPRg9GA0YsuXHJcbiAgICAgICAgY2FwdHVyZTogZnVuY3Rpb24gKHRhcmdldCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkcGllY2UgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAkKCcjJyArIG1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2UpLmF0dHIoJ2NoZXNzJyksXHJcbiAgICAgICAgICAgICAgICBpZDogbWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vbmV3IGNlbGxcclxuICAgICAgICAgICAgJCgnIycgKyB0YXJnZXQuaWQpLmh0bWwobWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2UubmFtZV0uaW1nKTtcclxuICAgICAgICAgICAgJCgnIycgKyB0YXJnZXQuaWQpLmF0dHIoJ2NoZXNzJywgc2VsZWN0ZWRwaWVjZS5uYW1lKTtcclxuICAgICAgICAgICAgLy9vbGQgY2VsbFxyXG4gICAgICAgICAgICAkKCcjJyArIHNlbGVjdGVkcGllY2UuaWQpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAkKCcjJyArIHNlbGVjdGVkcGllY2UuaWQpLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgLy9tb3ZlZCBwaWVjZVxyXG4gICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbc2VsZWN0ZWRwaWVjZS5uYW1lXS5wb3NpdGlvbiA9IHRhcmdldC5pZDtcclxuICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2UubmFtZV0ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlZCBwaWVjZVxyXG4gICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbdGFyZ2V0Lm5hbWVdLmNhcHR1cmVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXdudHJhbnNmb3JtOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50RmlndXJlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBuZXdOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB3X3F1ZWVuOiBcIiYjOTgxMztcIixcclxuICAgICAgICAgICAgICAgICAgICBiX3F1ZWVuOiBcIiYjOTgxOTtcIixcclxuICAgICAgICAgICAgICAgICAgICB3X3Jvb2s6IFwiJiM5ODE0O1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJfcm9vazogXCImIzk4MjA7XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd19rbmlnaHQ6IFwiJiM5ODE2O1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJfa25pZ2h0OiBcIiYjOTgyMjtcIixcclxuICAgICAgICAgICAgICAgICAgICB3X2Jpc2hvcDogXCImIzk4MTU7XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYl9iaXNob3A6IFwiJiM5ODIxO1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3ZlUGF3bigpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZHBpZWNlID0gJCgnIycgKyBtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlKS5hdHRyKCdjaGVzcycpOyAvLyDQpNC40LPRg9GA0LAg0LrQvtGC0L7RgNC+0Lkg0YXQvtC00LjQvC4gXHJcbiAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5sb2cuc3RhcnQgPSBtYWluLnZhcmlhYmxlcy5waWVjZXNbc2VsZWN0ZWRwaWVjZV0ucG9zaXRpb247IC8vINCX0LDQs9GA0YPQttCw0LXQvCDQsiDQu9C+0LMg0L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOLlxyXG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0ZWRGaWd1cmUoKTsgLy8g0J/QvtC70YPRh9C40LvQuCDQt9C90LDRh9C10L3QuNC1IHNlbGVjdGVkIGZpZ3VyZSAoXCJ3X3Bhd241XCIpLlxyXG5cclxuICAgICAgICAgICAgICAgICQoJyMnICsgdGFyZ2V0LmlkKS5odG1sKGN1cnJlbnRGaWd1cmUudHlwZVtjdXJyZW50RmlndXJlLm5hbWVdKTsgLy8g0J/QvtC60LDQt9GL0LLQsNC10Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDRhNC40LPRg9GA0Ysg0L3QsCDQvdC+0LLQvtC8INC/0L7Qu9C1LlxyXG5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtYWluLnZhcmlhYmxlcy5waWVjZXNbbWFpbi52YXJpYWJsZXMudGFyZ2V0Lm5hbWVdOyAgICAgLy8g0KPQtNCw0LvQuNGC0Ywg0YTQuNCz0YPRgNGDINC60LDQuiDQvtCx0YrQtdC60YIuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlKS5odG1sKCcnKTsgLy8g0KfQtdGA0LXQtyAuaHRtbCgpINC30LDQvNC10L3Rj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDRhNC40LPRg9GA0Ysg0LIgZGl2INGBIGlkPW1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2Ug0L3QsCAnJyDQuCDRg9Cx0LjRgNCw0LXQvCDQuNC30L7QsdGA0LDQttC10L3QuNC1INC/0LXRiNC60LguXHJcbiAgICAgICAgICAgICAgICAkKCcjJyArIG1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2UpLmF0dHIoJ2NoZXNzJywgJ251bGwnKTsgLy8g0KHRgtCw0YDQvtC1INC/0L7Qu9C1INC+0YHRgtCw0LLQu9GP0LXQvCDQv9GD0YHRgtGL0LwuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtC30LTQsNGC0Ywg0L7QsdGK0LXQutGCINCyINC80LDRgdGB0LjQstC1INCyINC60L7RgtC+0YDRi9C5INCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDQvdC+0LLRi9C1INGC0YDQsNC90YHRhNC+0YDQvNC40YDQvtCy0LDQvdC90YvQtSDRhNC40LPRg9GA0YsuXHJcbiAgICAgICAgICAgICAgICBtZXJnaW5nTmV3TmFtZUZpZ3VyZSgpO1xyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzW2N1cnJlbnRGaWd1cmUubmV3TmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZzogY3VycmVudEZpZ3VyZS50eXBlW2N1cnJlbnRGaWd1cmUubmFtZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjdXJyZW50RmlndXJlLm5hbWVcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnIycgKyB0YXJnZXQuaWQpLmF0dHIoJ2NoZXNzJywgY3VycmVudEZpZ3VyZS5uZXdOYW1lKTsgLy8g0JfQsNC00LDRkdC8INCw0YLRgNC40LHRg9GCINCy0YvQsdGA0LDQvdC90L7QuSDRhNC40LPRg9GA0Ysg0YLQuNC/0YMgXCJjaGVzc1wiINCyINC90L7QstC+0LwgZGl2LlxyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzW2N1cnJlbnRGaWd1cmUubmV3TmFtZV0ucG9zaXRpb24gPSB0YXJnZXQuaWQ7IC8vINCX0LDQvNC10L3Rj9C10Lwg0LrQvtC+0YDQuNC90LDRgtGDIHNlbGVjdGVkIGZpZ3VyZSDQvdCwINGC0LXQutGD0YnRg9GOLlxyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMubG9nLmVuZCA9IG1haW4udmFyaWFibGVzLnBpZWNlc1tjdXJyZW50RmlndXJlLm5ld05hbWVdLnBvc2l0aW9uOyAvLyDQl9Cw0LPRgNGD0LbQsNC10Lwg0LIg0LvQvtCzINC60L7QvdC10YfQvdGD0Y4g0L/QvtC30LjRhtC40Y4g0YTQuNCz0YPRgNGLLlxyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzW2N1cnJlbnRGaWd1cmUubmV3TmFtZV0udHJpZ2dlciA9IHRydWU7IC8vINCV0YHQu9C4INGE0YPQvdC60YbQuNGPIHBhd250cmFuc2Zvcm0g0L7RgtGA0LDQsdC+0YLQsNC70LAsINGC0L4gdHJpZ2dlciA9IHRydWUuXHJcbiAgICAgICAgICAgICAgICAvLyBtYWluLnZhcmlhYmxlcy5waWVjZXNbdGFyZ2V0Lm5hbWVdLmNhcHR1cmVkID0gdHJ1ZTsgIC8vINC00LvRjyBjYXB0dXJlXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWVyZ2luZ05ld05hbWVGaWd1cmUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZ3VyZS5uZXdOYW1lID0gY3VycmVudEZpZ3VyZS5uYW1lICsgbnVtYmVySWRlbnRpY2FsRmlndXJlKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBudW1iZXJJZGVudGljYWxGaWd1cmUoKSB7IC8vINGB0LrQvtC70YzQutC+INGA0LDQtyDQv9C+0LLRgtC+0YDRj9C10YLRgdGPLCDQstGL0LHRgNCw0L3QvdCw0Y8g0LTQu9GPINGC0YDQsNC90YHRhNC+0YDQvNCw0YbQuNC4INGE0LjQs9GD0YDQsC5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxsVHJhbnNmb3JtRmlndXJlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtYWluLnZhcmlhYmxlcy5waWVjZXMpIHsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INCy0YHQtSDRhNC40LPRg9GA0Ysg0LjQtyDQvtCx0YrQtdC60YLQsCBwaWVjZXMg0L/QtdGA0LXQsdC+0YDQvtC8INC10LPQviDQutC70Y7Rh9C10Lkg0LIg0LzQsNGB0YHQuNCyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUcmFuc2Zvcm1GaWd1cmVzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JjRidC10Lwg0YHQutC+0LvRjNC60L4g0YDQsNC3INCyINC80LDRgdGB0LjQstC1IFwiYWxsVHJhbnNmb3JtRmlndXJlc1wiINCy0YHRgtGA0LXRh9Cw0LXRgtGB0Y8g0LLRi9Cx0YDQsNC90L3QsNGPINC00LvRjyDRgtGA0LDQvdGB0YTQvtGA0LzQsNGG0LjQuCDRhNC40LPRg9GA0LAuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycjIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgaW4gYWxsVHJhbnNmb3JtRmlndXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsVHJhbnNmb3JtRmlndXJlc1tpXS5pbmRleE9mKGN1cnJlbnRGaWd1cmUubmFtZSkgKyAxKSB7Ly8g0JjRidC10Lwg0YfQuNGB0LvQviDQv9C+0LLRgtC+0YDQtdC90LjQuSDRgtC+0LvRjNC60L4g0LTQu9GPINCy0YvQsdGA0LDQvdC90L7QuSAo0LTQu9GPINGC0YDQsNC90YHRhNC+0YDQvNCw0YbQuNC4KSDRhNC40LPRg9GA0YsgKNC/0YvRgtCw0LXQvNGB0Y8g0LXRkSDQvdCw0LnRgtC4INGB0YDQtdC00Lgg0LzQsNGB0YHQuNCy0LAg0YTQuNCz0YPRgCkuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycjJbY3VycmVudEZpZ3VyZS5uYW1lXSAhPSB1bmRlZmluZWQpIHsgLy8g0JXRgdC70Lgg0LzQsNGB0YHQuNCyINC/0YPRgdGC0L7QuSAtINC80Ysg0LTQvtC70LbQvdGLINC90LDRh9Cw0YLRjCDRgSDQutCw0LrQvtCz0L4t0LvQuNCx0L4g0LfQvdCw0YfQtdC90LjRjywg0L/QvtGN0YLQvtC80YMg0YHRgtCw0LLQuNC8IGFycjJbYWxsVHJhbnNmb3JtRmlndXJlc1tpXV0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycjJbY3VycmVudEZpZ3VyZS5uYW1lXSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyMltjdXJyZW50RmlndXJlLm5hbWVdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZpZ3VyZS5uYW1lID09IFwid19yb29rXCIgfHwgY3VycmVudEZpZ3VyZS5uYW1lID09IFwiYl9yb29rXCIgfHwgY3VycmVudEZpZ3VyZS5uYW1lID09IFwid19rbmlnaHRcIiB8fCBjdXJyZW50RmlndXJlLm5hbWUgPT0gXCJiX2tuaWdodFwiIHx8IGN1cnJlbnRGaWd1cmUubmFtZSA9PSBcIndfYmlzaG9wXCIgfHwgY3VycmVudEZpZ3VyZS5uYW1lID09IFwiYl9iaXNob3BcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIyW2N1cnJlbnRGaWd1cmUubmFtZV0rKzsgLy8g0J3QsNC30YvQstCw0LXQvCDQu9Cw0LTRjNGOLCDQutC+0L3Rjywg0YHQu9C+0L3QsCwg0YEg0YbQuNGE0YDRiyAzIC0gXCJ3X3Jvb2szXCIgKNC60YDQvtC80LUg0YTQtdGA0LfRjykuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRyYW5zZm9ybUZpZ3VyZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaXNOYU4oYXJyMltjdXJyZW50RmlndXJlLm5hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHJldHVybiBhcnIyW2N1cnJlbnRGaWd1cmUubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjJbY3VycmVudEZpZ3VyZS5uYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRGaWd1cmUoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZjtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQoJy5jaGFuZ2UtZmlndXJlJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAnX3F1ZWVuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAnX3Jvb2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdOJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9ICdfa25pZ2h0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSAnX2Jpc2hvcCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQktGL0LHQtdGA0Lgg0LjQtyDRh9C10YLRi9GA0ZHRhSDRhNC40LPRg9GAJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEZpZ3VyZS5uYW1lID0gbWFpbi52YXJpYWJsZXMudHVybiArIGY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L/QtdGI0LrQsCDQu9C4INGN0YLQvi5cclxuICAgICAgICAgICAgaWYgKG1haW4udmFyaWFibGVzLnRhcmdldC5uYW1lLmluZGV4T2YoJ3Bhd24nKSArIDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB5O1xyXG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KG1haW4udmFyaWFibGVzLnRhcmdldC5pZC5zcGxpdCgnXycpWzFdKTtcclxuICAgICAgICAgICAgICAgIGlmICh5ID09IDEgfHwgeSA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90L3Rg9GOINGE0YPQvdC60YbQuNGOICBtYWluLm1ldGhvZHMubW92ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVQYXduKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLmVuZHR1cm4oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyDRgdGA0LDQstC90LjQstCw0LXRgiBpZCBkaXYtYSDQv9C+INC60YLQvtGA0YDQvtC80YMg0Y8g0LrQu9C40LrQvdGD0Lsg0LTQu9GPINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0YTQuNCz0YPRgNGLLCDRgSDQvNCw0YHRgdC40LLQvtC8IGhpZ2hsaWdodGVkINCy0L7Qt9C80L7QttC90YvRhSDRhdC+0LTQvtCyLlxyXG4gICAgICAgIC8vINCS0YvQtNCw0ZHRgiB0cnVlINC40LvQuCBmYWxzZS5cclxuICAgICAgICBjYW5tb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlID09IG1haW4udmFyaWFibGVzLnRhcmdldC5pZCkgeyByZXR1cm4gZmFsc2UgfSAvLyDQldGB0LvQuCDQutC+0L7RgNC00LjQvdCw0YLQsCDQv9C+0LvRjyDQvdCwINC60L7RgtC+0YDQvtC8INGB0YDQsNCx0L7RgtCw0LvQviDRgdC+0LHRi9GC0LjQtSBvcmlnaW5hbEV2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiBcImNsaWNrXCIg0YDQsNCy0L3QsCDQv9C+0LfQuNGG0Lgg0YTQuNCz0YPRgNGLINC60L7RgtC+0YDQvtC5INCx0YPQtNC10Lwg0YXQvtC00LjRgtGMIC0gcmV0dXJuLCDQuNC90LDRh9C1INC/0YDQvtC00L7Qu9C20LjRgtGMLlxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLmhpZ2hsaWdodGVkLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChtYWluLnZhcmlhYmxlcy50YXJnZXQuaWQgPT0gZWxlbWVudCk7IC8vINCY0YnQtdC8INC90LDQu9C40YfQuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0L7Qu9GPLCDQvdCwINC60L7RgtC+0YDQvtC1INCy0YvQsdGA0LDQu9C4INGF0L7QtNC40YLRjCwgINCyINC80LDRgdGB0LjQstC1INCy0L7Qt9C80L7QttC90YvRhSDRhdC+0LTQvtCyLlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCQuaW5BcnJheSh0cnVlLCBhcnIpKSA9PSBwYXJzZUludChcIi0xXCIpKSB7IHJldHVybiBmYWxzZSB9IC8vINCV0YHQu9C4INCyINC80LDRgdGB0LjQstC1INCy0L7Qt9C80L7QttC90YvRhSDRhdC+0LTQvtCyINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+IFwiLTFcIiAtIHJldHVybiBmYWxzZSwg0LjQvdCw0YfQtSByZXR1cm4gdHJ1ZS5cclxuICAgICAgICAgICAgICAgIGVsc2UgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpdFBhd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG1haW4udmFyaWFibGVzLnRhcmdldC5uYW1lLmluZGV4T2YoJ3Bhd24nKSArIDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB5O1xyXG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KG1haW4udmFyaWFibGVzLnRhcmdldC5pZC5zcGxpdCgnXycpWzFdKTtcclxuICAgICAgICAgICAgICAgIGlmICh5ID09IDEgfHwgeSA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW92ZTogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRwaWVjZSA9ICQoJyMnICsgbWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZSkuYXR0cignY2hlc3MnKTtcclxuICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMubG9nLnN0YXJ0ID0gbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLnBvc2l0aW9uOyAvLyDQl9Cw0LPRgNGD0LbQsNC10Lwg0LIg0LvQvtCzINC90LDRh9Cw0LvRjNC90YPRjiDQv9C+0LfQuNGG0LjRji5cclxuXHJcbiAgICAgICAgICAgICQoJyMnICsgdGFyZ2V0LmlkKS5odG1sKG1haW4udmFyaWFibGVzLnBpZWNlc1tzZWxlY3RlZHBpZWNlXS5pbWcpOyAvLyDQn9C10YDQtdC80LXRidC10L3QuNC1INGE0LjQs9GD0YDRiyDQvdCwINC90L7QstC+0LUg0L/QvtC70LUuXHJcbiAgICAgICAgICAgICQoJyMnICsgdGFyZ2V0LmlkKS5hdHRyKCdjaGVzcycsIHNlbGVjdGVkcGllY2UpOyAvLyDQl9Cw0LTQsNGR0Lwg0LDRgtGA0LjQsdGD0YIg0LLRi9Cx0YDQsNC90L3QvtC5INGE0LjQs9GD0YDRiyDRgtC40L/RgyBcImNoZXNzXCIg0LIg0L3QvtCy0L7QvCBkaXYuXHJcbiAgICAgICAgICAgIC8vINCn0LXRgNC10LcgLmh0bWwoKSDQt9Cw0LzQtdC90Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0YTQuNCz0YPRgNGLINCyIGRpdiDRgSBpZD1tYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlINC90LAgJycuXHJcbiAgICAgICAgICAgICQoJyMnICsgbWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZSkuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyMnICsgbWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZSkuYXR0cignY2hlc3MnLCAnbnVsbCcpOyAvLyDQodGC0LDRgNC+0LUg0L/QvtC70LUg0L7RgdGC0LDQstC70Y/QtdC8INC/0YPRgdGC0YvQvC5cclxuICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLnBvc2l0aW9uID0gdGFyZ2V0LmlkOyAvLyDQl9Cw0LzQtdC90Y/QtdC8INC60L7QvtGA0LjQvdCw0YLRgyDRhNC40LPRg9GA0Ysg0L3QsCDRgtC10LrRg9GJ0YPRji5cclxuICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMubG9nLmVuZCA9IG1haW4udmFyaWFibGVzLnBpZWNlc1tzZWxlY3RlZHBpZWNlXS5wb3NpdGlvbjsgLy8g0JfQsNCz0YDRg9C20LDQtdC8INCyINC70L7QsyDQutC+0L3QtdGH0L3Rg9GOINC/0L7Qt9C40YbQuNGOINGE0LjQs9GD0YDRiy5cclxuICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2VdLm1vdmVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlbmR0dXJuOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAobWFpbi52YXJpYWJsZXMudHVybiA9PSAndycpIHtcclxuICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnR1cm4gPSAnYic7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdG9nZ2xlIGhpZ2hsaWdodGVkIGNvb3JkaW5hdGVzLlxyXG4gICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLnRvZ2dsZWhpZ2hsaWdodChtYWluLnZhcmlhYmxlcy5oaWdobGlnaHRlZCk7XHJcbiAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5oaWdobGlnaHRlZC5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8g0J7Rh9C40YnQsNC10Lwg0LzQsNGB0YHQuNCyINGBINC60L7QvtGA0LTQuNC90LDRgtCw0LzQuCwg0L/QvtC00YHQstC10YfQuNCy0LDQtdC80YvRhSDQv9C+0LvQtdC5LiDQmCDQutC70Y7RhyDQsiDQvtCx0YrQtdC60YLQtSAgbWFpbi52YXJpYWJsZXMudGFyZ2V0INGBINCy0YvQsdGA0LDQvdC90YvQvCDQv9C+0LvQtdC8LlxyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMudGFyZ2V0LmlkID0gJyc7XHJcbiAgICAgICAgICAgICAgICBtYWluLm1ldGhvZHMud3JpdGVsb2coKTtcclxuICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy5zY3JvbGxib3R0b20oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjdHVybicpLmh0bWwoXCLQpdC+0LQg0KfRkdGA0L3Ri9GFXCIpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3R1cm4nKS5yZW1vdmVDbGFzcygnd2hpdGUnKTtcclxuICAgICAgICAgICAgICAgICQoJyN0dXJuJykuYWRkQ2xhc3MoJ2JsYWNrJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDQodGO0LTQsCDQstGB0YLQsNCy0LjRgtGMINGC0LDQudC80LXRgFxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYWluLnZhcmlhYmxlcy50dXJuID0gJ2InKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy50dXJuID0gJ3cnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvZ2dsZSBoaWdobGlnaHRlZCBjb29yZGluYXRlcy5cclxuICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy50b2dnbGVoaWdobGlnaHQobWFpbi52YXJpYWJsZXMuaGlnaGxpZ2h0ZWQpO1xyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMuaGlnaGxpZ2h0ZWQubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIC8vINCe0YfQuNGJ0LDQtdC8INC80LDRgdGB0LjQsiDRgSDQutC+0L7RgNC00LjQvdCw0YLQsNC80LgsINC/0L7QtNGB0LLQtdGH0LjQstCw0LXQvNGL0YUg0L/QvtC70LXQuS5cclxuICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2UgPSAnJztcclxuICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnRhcmdldC5pZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLndyaXRlbG9nKCk7XHJcbiAgICAgICAgICAgICAgICBtYWluLm1ldGhvZHMuc2Nyb2xsYm90dG9tKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3R1cm4nKS5odG1sKFwi0KXQvtC0INCR0LXQu9GL0YVcIik7XHJcbiAgICAgICAgICAgICAgICAkKCcjdHVybicpLnJlbW92ZUNsYXNzKCdibGFjaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3R1cm4nKS5hZGRDbGFzcygnd2hpdGUnKTtcclxuICAgICAgICAgICAgICAgIC8vINCh0Y7QtNCwINCy0YHRgtCw0LLQuNGC0Ywg0YLQsNC50LzQtdGAXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgd3JpdGVsb2c6IGZ1bmN0aW9uICgpIHsgLy8g0JvQvtCzINC40LPRgNGLIFxyXG4gICAgICAgICAgICAvLyDQnNC10YLQvtC0IGNoYXJBdCgpINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGD0LrQsNC30LDQvdC90YvQuSDRgdC40LzQstC+0Lsg0LjQtyDRgdGC0YDQvtC60LguXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyTG9nU3RhcnRFbmQoKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5sb2cuc3RhcnQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMubG9nLmVuZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGVsb2dXaGl0ZVR1cm4oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZ2FtZS1sb2cnKS5hcHBlbmQoJzxwPicpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2dhbWUtbG9nPnA6bGFzdC1jaGlsZCcpLmFwcGVuZCgnJiMxNjA7JyArIFQgKyAnJiMxNjA7Jyk7XHJcbiAgICAgICAgICAgICAgICBLID0gXCImIzE2MDtcIjtcclxuICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLmxvZy5tb3ZlTnVtYmVyID0gbWFpbi52YXJpYWJsZXMubG9nLm1vdmVOdW1iZXIgKyAyO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJMb2dTdGFydEVuZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGVsb2dCbGFja1R1cm4oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZ2FtZS1sb2c+cDpsYXN0LWNoaWxkJykuYXBwZW5kKCcmIzE2MDsnICsgVCArICcmIzE2MDsnKTtcclxuICAgICAgICAgICAgICAgIEsgPSBcIiYjMTYwO1wiO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJMb2dTdGFydEVuZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydFBvc2l0aW9uRmlndXJlID0gbWFpbi52YXJpYWJsZXMubG9nLnN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgZW5kUG9zaXRpb25GaWd1cmUgPSBtYWluLnZhcmlhYmxlcy5sb2cuZW5kO1xyXG4gICAgICAgICAgICB2YXIgSyA9IFwiJiMxNjA7XCI7XHJcbiAgICAgICAgICAgIHZhciBUO1xyXG4gICAgICAgICAgICB2YXIgaiA9IFwiYWJjZGVmZ2hcIjtcclxuXHJcbiAgICAgICAgICAgIC8vINCf0YDQuCDRgNC+0LrQuNGA0L7QstC60LUuXHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvc2l0aW9uRmlndXJlID09IFwiMC0wXCIgfHwgc3RhcnRQb3NpdGlvbkZpZ3VyZSA9PSBcIjAtMC0wXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vINCR0LXQu9GL0LUg0YHQtNC10LvQsNC70Lgg0YXQvtC0XHJcbiAgICAgICAgICAgICAgICBpZiAobWFpbi52YXJpYWJsZXMudHVybiA9PSAnYicpIHsgLy8g0KHRgtCw0LLQuNC8ICdiJyDRgtCw0Log0LrQsNC6INC40LfQvNC10L3QtdC90LjRjyDQsiBtYWluLnZhcmlhYmxlcy50dXJuINCj0JbQlSDQv9GA0L7QuNC30LLQtdC00LXQvdGLLCDQsCBcItGE0YPQvdC60YbQuNGPXCIgd3JpdGVsb2cg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQv9C+0YHQu9C1INGN0YLQuNGFINC40LfQvNC10L3QtdC90LjQuS5cclxuICAgICAgICAgICAgICAgICAgICBLID0gSyArICgoMiArIG1haW4udmFyaWFibGVzLmxvZy5tb3ZlTnVtYmVyKSA+PiAxKSArIFwiLiBcIjsgLy8gMCA+PiAxID0gMCwgICAxID4+IDEgPSAwLCAgIDIgPj4gMSA9IDEsICAgMyA+PiAxID0gMSwgICA0ID4+IDEgPSAyLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vID4+IC0g0KHQtNCy0LjQs9Cw0LXRgiDQtNCy0L7QuNGH0L3QvtC1INC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1INGH0LjRgdC70LAgYSDQvdCwIGIg0YDQsNC30YDRj9C00L7QsiDQstC/0YDQsNCy0L4uINCe0YHQstC+0LHQvtC20LTQsNGO0YnQuNC10YHRjyDRgNCw0LfRgNGP0LTRiyDQt9Cw0L/QvtC70L3Rj9GO0YLRgdGPICDQt9C90LDQutC+0LLRi9C8INCx0LjRgtC+0LwuXHJcbiAgICAgICAgICAgICAgICAgICAgVCA9IEsgKyBzdGFydFBvc2l0aW9uRmlndXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlbG9nV2hpdGVUdXJuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KfRkdGA0L3Ri9C1INGB0LTQtdC70LDQu9C4INGF0L7QtFxyXG4gICAgICAgICAgICAgICAgaWYgKG1haW4udmFyaWFibGVzLnR1cm4gPT0gJ3cnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSyA9IFwiJiMxNjA7JiMxNjA7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgVCA9IEsgKyBzdGFydFBvc2l0aW9uRmlndXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlbG9nQmxhY2tUdXJuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHggPSBwYXJzZUludChzdGFydFBvc2l0aW9uRmlndXJlLnNwbGl0KCdfJylbMF0pLFxyXG4gICAgICAgICAgICAgICAgeSA9IHBhcnNlSW50KHN0YXJ0UG9zaXRpb25GaWd1cmUuc3BsaXQoJ18nKVsxXSksXHJcbiAgICAgICAgICAgICAgICBYID0gcGFyc2VJbnQoZW5kUG9zaXRpb25GaWd1cmUuc3BsaXQoJ18nKVswXSksXHJcbiAgICAgICAgICAgICAgICBZID0gcGFyc2VJbnQoZW5kUG9zaXRpb25GaWd1cmUuc3BsaXQoJ18nKVsxXSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQkdC10LvRi9C1INGB0LTQtdC70LDQu9C4INGF0L7QtFxyXG4gICAgICAgICAgICBpZiAobWFpbi52YXJpYWJsZXMudHVybiA9PSAnYicpIHsgLy8g0KHRgtCw0LLQuNC8ICdiJyDRgtCw0Log0LrQsNC6INC40LfQvNC10L3QtdC90LjRjyDQsiBtYWluLnZhcmlhYmxlcy50dXJuINCj0JbQlSDQv9GA0L7QuNC30LLQtdC00LXQvdGLLCDQsCBcItGE0YPQvdC60YbQuNGPXCIgd3JpdGVsb2cg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQv9C+0YHQu9C1INGN0YLQuNGFINC40LfQvNC10L3QtdC90LjQuS5cclxuICAgICAgICAgICAgICAgIEsgPSBLICsgKCgyICsgbWFpbi52YXJpYWJsZXMubG9nLm1vdmVOdW1iZXIpID4+IDEpICsgXCIuIFwiOyAvLyAwID4+IDEgPSAwLCAgIDEgPj4gMSA9IDAsICAgMiA+PiAxID0gMSwgICAzID4+IDEgPSAxLCAgIDQgPj4gMSA9IDIuXHJcbiAgICAgICAgICAgICAgICBUID0gSyArIGouY2hhckF0KHggLSAxKSArICh5KSArIFwiJiM0NTtcIiArIGouY2hhckF0KFggLSAxKSArIChZKTtcclxuICAgICAgICAgICAgICAgIHdyaXRlbG9nV2hpdGVUdXJuKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vINCn0ZHRgNC90YvQtSDRgdC00LXQu9Cw0LvQuCDRhdC+0LRcclxuICAgICAgICAgICAgaWYgKG1haW4udmFyaWFibGVzLnR1cm4gPT0gJ3cnKSB7XHJcbiAgICAgICAgICAgICAgICBLID0gXCImIzE2MDsmIzE2MDtcIjtcclxuICAgICAgICAgICAgICAgIFQgPSBLICsgai5jaGFyQXQoeCAtIDEpICsgKHkpICsgXCImIzQ1O1wiICsgai5jaGFyQXQoWCAtIDEpICsgKFkpO1xyXG4gICAgICAgICAgICAgICAgd3JpdGVsb2dCbGFja1R1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vINCh0LrRgNC+0LvQuyDQsiBcIiNnYW1lLWxvZ1wiINC/0YDQuNCy0Y/Qt9Cw0L0g0Log0L3QuNC30YMuXHJcbiAgICAgICAgc2Nyb2xsYm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1sb2dcIik7XHJcbiAgICAgICAgICAgIGJsb2NrLnNjcm9sbFRvcCA9IGJsb2NrLnNjcm9sbEhlaWdodDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDQn9C+0LTRgdCy0LXRgtC60LAg0LLQvtC30LzQvtC20L3Ri9GFINGF0L7QtNC+0LIuXHJcbiAgICAgICAgdG9nZ2xlaGlnaGxpZ2h0OiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAvLyDQnNC10YLQvtC0IGZvckVhY2goKSDQstGL0L/QvtC70L3Rj9C10YIg0YPQutCw0LfQsNC90L3Rg9GOINGE0YPQvdC60YbQuNGOINC+0LTQuNC9INGA0LDQtyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQsiDQvNCw0YHRgdC40LLQtS5cclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICQoJyMnICsgZWxlbWVudCkudG9nZ2xlQ2xhc3MoXCJ0cnVlLW1vdmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8g0JTQstC40LbQtdC90LjQtSDRhNC40LPRg9GAXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIG1haW4ubWV0aG9kcy5nYW1lc2V0dXAoKTtcclxuICAgIC8vIGNsaWNrKCkg0L/RgNC40LLRj9C30YvQstCw0LXRgiBKYXZhU2NyaXB0INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNC5IFwiY2xpY2tcIiAo0LrQu9C40Log0LvQtdCy0L7QuSDQutC90L7Qv9C60L7QuSDQvNGL0YjQuCksINC40LvQuCDQt9Cw0L/Rg9GB0LrQsNC10YIg0Y3RgtC+INGB0L7QsdGL0YLQuNC1INC90LAg0LLRi9Cx0YDQsNC90L3Ri9C5INGN0LvQtdC80LXQvdGCLiDQm9C10LLQsNGPINC60L3QvtC/0LrQsCDQvNGL0YjQuCDQvdCw0LbQsNGC0LAsINC60L7Qs9C00LAg0LrRg9GA0YHQvtGAINC90LDRhdC+0LTQuNC70YHRjyDQstC90YPRgtGA0Lgg0Y3Qu9C10LzQtdC90YLQsC4g0JvQtdCy0LDRjyDQutC90L7Qv9C60LAg0LzRi9GI0Lgg0L7RgtC/0YPRidC10L3QsCDQv9C+0LrQsCDQutGD0YDRgdC+0YAg0L3QsNGF0L7QtNC40YLRgdGPINCy0L3Rg9GC0YDQuCDRjdC70LXQvNC10L3RgtCwLlxyXG4gICAgJCgnLmdhbWVjZWxsJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGVjdGVkcGllY2UgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBpZDogbWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlID09ICcnKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkcGllY2UubmFtZSA9ICQoJyMnICsgZS50YXJnZXQuaWQpLmF0dHIoJ2NoZXNzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRwaWVjZS5uYW1lID0gJCgnIycgKyBtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlKS5hdHRyKCdjaGVzcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJCh0aGlzKS5hdHRyKCdjaGVzcycpLFxyXG4gICAgICAgICAgICBpZDogZS50YXJnZXQuaWQgLy8g0J/RgNC40LLRj9C30YvQstCw0LXQvCDQuiDRgdC+0LHRi9GC0LjRjiBvcmlnaW5hbEV2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiBcImNsaWNrXCIsINC/0YDQuNGB0LLQsNC40LLQsNC90LjQtSDQt9C90LDRh9C10L3QuNGPIFwiaWRcIiAoNV8yKSDQuiDQutC70Y7Rh9GDIGlkINCyINC+0LHRitC10LrRgtC1IHRhcmdldC5cclxuICAgICAgICB9O1xyXG4gICAgICAgIG1haW4udmFyaWFibGVzLnRhcmdldC5pZCA9IHRhcmdldC5pZDtcclxuICAgICAgICBpZiAoISh0YXJnZXQubmFtZSA9PSBcIm51bGxcIikpIHsgLy8g0JTQu9GPINC30LDQv9C40YHQuCBwaWVjZXMgKHdfcGF3bjUpINCyIG1haW4udmFyaWFibGVzLnRhcmdldC5uYW1lLCArINC40YHQutC70Y7Rh9C40YLRjCDQv9C10YDQtdC30LDQv9C40YHRjCBcIm51bGxcIi3QvtC8LlxyXG4gICAgICAgICAgICBtYWluLnZhcmlhYmxlcy50YXJnZXQubmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2UgPT0gJycgJiYgdGFyZ2V0Lm5hbWUuc2xpY2UoMCwgMSkgPT0gbWFpbi52YXJpYWJsZXMudHVybikge1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZW9wdGlvbnMuXHJcbiAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2UgPSBlLnRhcmdldC5pZDtcclxuICAgICAgICAgICAgbWFpbi5tZXRob2RzLm1vdmVvcHRpb25zKCQodGhpcykuYXR0cignY2hlc3MnKSk7XHJcbiAgICAgICAgICAgIC8vINCg0L7QutC40YDQvtCy0LrQsCDQvtGCINGB0Y7QtNCwLlxyXG4gICAgICAgIH0gZWxzZSBpZiAobWFpbi52YXJpYWJsZXMuc2VsZWN0ZWRwaWVjZSAhPSAnJyAmJiB0YXJnZXQubmFtZSA9PSAnbnVsbCcpIHsgLy8g0J/QtdGA0LXQvNC10YnQsNC10Lwg0LLRi9Cx0YDQsNC90L3Rg9GOINGE0LjQs9GD0YDRg1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkcGllY2UubmFtZSA9PSAnd19raW5nJyB8fCBzZWxlY3RlZHBpZWNlLm5hbWUgPT0gJ2Jfa2luZycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdDAgPSAoc2VsZWN0ZWRwaWVjZS5uYW1lID09ICd3X2tpbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCB0MSA9IChzZWxlY3RlZHBpZWNlLm5hbWUgPT0gJ2Jfa2luZycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQyID0gKG1haW4udmFyaWFibGVzLnBpZWNlc1tzZWxlY3RlZHBpZWNlLm5hbWVdLm1vdmVkID09IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCB0MyA9IChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfcm9vazInXS5tb3ZlZCA9PSBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdDQgPSAobWFpbi52YXJpYWJsZXMucGllY2VzWyd3X3Jvb2syJ10ubW92ZWQgPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQ1ID0gKHRhcmdldC5pZCA9PSAnN184Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdDYgPSAodGFyZ2V0LmlkID09ICc3XzEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdDcgPSAobWFpbi52YXJpYWJsZXMucGllY2VzWydiX3Jvb2sxJ10ubW92ZWQgPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQ4ID0gKG1haW4udmFyaWFibGVzLnBpZWNlc1snd19yb29rMSddLm1vdmVkID09IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCB0OSA9ICh0YXJnZXQuaWQgPT0gJzNfOCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQxMCA9ICh0YXJnZXQuaWQgPT0gJzNfMScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0OSB8fCB0MTApIHsgLy8g0JTQm9CY0J3QndCQ0K8g0YDQvtC60LjRgNC+0LLQutCwICjQtNC70Y8g0YDQsNC30LvQuNGH0LjRjyDQtNC70LjQvdC90L7QuSDQuCDQutC+0YDQvtGC0LrQvtC5INGA0L7QutC40YDQvtCy0L7QuikuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQwICYmIHQyICYmIHQ4ICYmIHQxMCkgeyAvLyB3X2tpbmcuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga19wb3NpdGlvbiA9ICc1XzEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga190YXJnZXQgPSAnM18xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJfcG9zaXRpb24gPSAnMV8xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJfdGFyZ2V0ID0gJzRfMSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfa2luZyddLnBvc2l0aW9uID0gJzNfMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnBpZWNlc1snd19raW5nJ10ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfcG9zaXRpb24pLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfcG9zaXRpb24pLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBrX3RhcmdldCkuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfa2luZyddLmltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsga190YXJnZXQpLmF0dHIoJ2NoZXNzJywgJ3dfa2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X3Jvb2sxJ10ucG9zaXRpb24gPSAnNF8xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X3Jvb2sxJ10ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfcG9zaXRpb24pLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfcG9zaXRpb24pLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyByX3RhcmdldCkuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfcm9vazEnXS5pbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfdGFyZ2V0KS5hdHRyKCdjaGVzcycsICd3X3Jvb2sxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5sb2cuc3RhcnQgPSAnMC0wLTAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLm1ldGhvZHMuZW5kdHVybigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQxICYmIHQyICYmIHQ3ICYmIHQ5KSB7IC8vIGJfa2luZy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrX3Bvc2l0aW9uID0gJzVfOCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrX3RhcmdldCA9ICczXzgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcl9wb3NpdGlvbiA9ICcxXzgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcl90YXJnZXQgPSAnNF84JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9raW5nJ10ucG9zaXRpb24gPSAnM184JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWydiX2tpbmcnXS5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsga19wb3NpdGlvbikuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsga19wb3NpdGlvbikuYXR0cignY2hlc3MnLCAnbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfdGFyZ2V0KS5odG1sKG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9raW5nJ10uaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBrX3RhcmdldCkuYXR0cignY2hlc3MnLCAnYl9raW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfcm9vazEnXS5wb3NpdGlvbiA9ICc0XzgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfcm9vazEnXS5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgcl9wb3NpdGlvbikuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgcl9wb3NpdGlvbikuYXR0cignY2hlc3MnLCAnbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfdGFyZ2V0KS5odG1sKG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9yb29rMSddLmltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgcl90YXJnZXQpLmF0dHIoJ2NoZXNzJywgJ2Jfcm9vazEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLmxvZy5zdGFydCA9ICcwLTAtMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy5lbmR0dXJuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0NSB8fCB0NikgeyAvLyDQmtCe0KDQntCi0JrQkNCvINGA0L7QutC40YDQvtCy0LrQsCAo0LTQu9GPINGA0LDQt9C70LjRh9C40Y8g0LTQu9C40L3QvdC+0Lkg0Lgg0LrQvtGA0L7RgtC60L7QuSDRgNC+0LrQuNGA0L7QstC+0LopLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0MCAmJiB0MiAmJiB0NCAmJiB0NikgeyAvLyB3X2tpbmcuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga19wb3NpdGlvbiA9ICc1XzEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga190YXJnZXQgPSAnN18xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJfcG9zaXRpb24gPSAnOF8xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJfdGFyZ2V0ID0gJzZfMSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfa2luZyddLnBvc2l0aW9uID0gJzdfMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnBpZWNlc1snd19raW5nJ10ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfcG9zaXRpb24pLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfcG9zaXRpb24pLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBrX3RhcmdldCkuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfa2luZyddLmltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsga190YXJnZXQpLmF0dHIoJ2NoZXNzJywgJ3dfa2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X3Jvb2syJ10ucG9zaXRpb24gPSAnNl8xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWyd3X3Jvb2syJ10ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfcG9zaXRpb24pLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfcG9zaXRpb24pLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyByX3RhcmdldCkuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ3dfcm9vazInXS5pbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfdGFyZ2V0KS5hdHRyKCdjaGVzcycsICd3X3Jvb2syJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5sb2cuc3RhcnQgPSAnMC0wJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLmVuZHR1cm4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0MSAmJiB0MiAmJiB0MyAmJiB0NSkgeyAvLyBiX2tpbmcuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga19wb3NpdGlvbiA9ICc1XzgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga190YXJnZXQgPSAnN184JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJfcG9zaXRpb24gPSAnOF84JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJfdGFyZ2V0ID0gJzZfOCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfa2luZyddLnBvc2l0aW9uID0gJzdfOCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4udmFyaWFibGVzLnBpZWNlc1snYl9raW5nJ10ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfcG9zaXRpb24pLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGtfcG9zaXRpb24pLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBrX3RhcmdldCkuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfa2luZyddLmltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsga190YXJnZXQpLmF0dHIoJ2NoZXNzJywgJ2Jfa2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWydiX3Jvb2syJ10ucG9zaXRpb24gPSAnNl84JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMucGllY2VzWydiX3Jvb2syJ10ubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfcG9zaXRpb24pLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfcG9zaXRpb24pLmF0dHIoJ2NoZXNzJywgJ251bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyByX3RhcmdldCkuaHRtbChtYWluLnZhcmlhYmxlcy5waWVjZXNbJ2Jfcm9vazInXS5pbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIHJfdGFyZ2V0KS5hdHRyKCdjaGVzcycsICdiX3Jvb2syJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5sb2cuc3RhcnQgPSAnMC0wJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLmVuZHR1cm4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gbW92ZSBzZWxlY3RlZHBpZWNlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWFpbi5tZXRob2RzLmNhbm1vdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLm1ldGhvZHMubW92ZSh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluLm1ldGhvZHMuZW5kdHVybigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQuNC90LDRh9C1LCDQtdGB0LvQuCBzZWxlY2VkcGllY2UubmFtZSDQvdC1INCx0LXQu9GL0LkgLyDRh9C10YDQvdGL0Lkg0LrQvtGA0L7Qu9GMLCDRgtC+0LPQtNCwINCy0YvQt9GL0LLQsNC10LwgXCJtb3ZlXCIuXHJcbiAgICAgICAgICAgICAgICBpZiAobWFpbi5tZXRob2RzLmNhbm1vdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluLm1ldGhvZHMucGF3bnRyYW5zZm9ybSh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy5tb3ZlKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy5lbmR0dXJuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKG1haW4udmFyaWFibGVzLnNlbGVjdGVkcGllY2UgIT0gJycgJiYgdGFyZ2V0Lm5hbWUgIT0gJ251bGwnICYmIHRhcmdldC5pZCAhPSBzZWxlY3RlZHBpZWNlLmlkICYmIHNlbGVjdGVkcGllY2UubmFtZS5zbGljZSgwLCAxKSAhPSB0YXJnZXQubmFtZS5zbGljZSgwLCAxKSkgeyAvLyBjYXB0dXJlIGEgcGllY2VcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZHBpZWNlLmlkICE9IHRhcmdldC5pZCAmJiBtYWluLnZhcmlhYmxlcy5oaWdobGlnaHRlZC5pbmRleE9mKHRhcmdldC5pZCkgIT0gKC0xKSkgeyAvLyDQldGB0LvQuCDQvNGLINC90LUg0L/Ri9GC0LDQtdC80YHRjyDQt9Cw0YXQstCw0YLQuNGC0Ywg0YTQuNCz0YPRgNGLINC90LUg0LIg0LTQuNCw0L/QsNC30L7QvdC1INC00LLQuNC20LXQvdC40Y8g0YTQuNCz0YPRgNGLLlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhcHR1cmUuINCa0L7QvtGA0LTQuNC90LDRgtGLINC/0YDQuCDQstC30Y/RgtC40Lgg0YTQuNCz0YPRgNGLLlxyXG4gICAgICAgICAgICAgICAgbWFpbi52YXJpYWJsZXMubG9nLnN0YXJ0ID0gbWFpbi52YXJpYWJsZXMucGllY2VzW3NlbGVjdGVkcGllY2UubmFtZV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5sb2cuZW5kID0gbWFpbi52YXJpYWJsZXMucGllY2VzW3RhcmdldC5uYW1lXS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWFpbi5tZXRob2RzLmNhbm1vdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWluLm1ldGhvZHMucGF3bnRyYW5zZm9ybSh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW4ubWV0aG9kcy5jYXB0dXJlKHRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5tZXRob2RzLmVuZHR1cm4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlICE9ICcnICYmIHRhcmdldC5uYW1lICE9ICdudWxsJyAmJiB0YXJnZXQuaWQgIT0gc2VsZWN0ZWRwaWVjZS5pZCAmJiBzZWxlY3RlZHBpZWNlLm5hbWUuc2xpY2UoMCwgMSkgPT0gdGFyZ2V0Lm5hbWUuc2xpY2UoMCwgMSkpIHsgLy8gdG9nZ2xlIG1vdmUgb3B0aW9ucy5cclxuXHJcbiAgICAgICAgICAgIC8vIHRvZ2dsZS5cclxuICAgICAgICAgICAgbWFpbi5tZXRob2RzLnRvZ2dsZWhpZ2hsaWdodChtYWluLnZhcmlhYmxlcy5oaWdobGlnaHRlZCk7XHJcbiAgICAgICAgICAgIG1haW4udmFyaWFibGVzLmhpZ2hsaWdodGVkLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICBtYWluLnZhcmlhYmxlcy5zZWxlY3RlZHBpZWNlID0gdGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICBtYWluLm1ldGhvZHMubW92ZW9wdGlvbnModGFyZ2V0Lm5hbWUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0KPQsdC40YDQsNC10Lwg0LLRi9C30L7QsiDQutC+0L3RgtC10YHRgtC90L7Qs9C+INC80LXQvdGOIC0g0J/QmtCcINC90LAgXCLQtNC+0YHQutC1XCIuXHJcbiAgICAkKCdib2R5JykuY29udGV4dG1lbnUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
