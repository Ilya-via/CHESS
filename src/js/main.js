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