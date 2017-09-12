$(function(){
    var jQuiz = {
        answers: { q1: 'b', q2: 'c', q3: 'b', q4: 'a', q5: 'a', q6: 'c', q7: 'a', q8: 'b', q9: 'b', q10: 'c', q11: 'b', q12: 'b', q13: 'a', q14: 'c', q15: 'b' },
        questionLenght: 15,
        checkAnswers: function() {
            var arr = this.answers;
            var ans = this.userAnswers;
            var resultArr = []
            for (var p in ans) {
                var x = parseInt(p) + 1;
                var key = 'q' + x;
                var flag = false;
                if (ans[p] == 'q' + x + '-' + arr[key]) {
                    flag = true;
                }
                else {
                    flag = false;
                }
                resultArr.push(flag);
            }
            return resultArr;
        },
        init: function(){
            $('.btnNext').click(function(){
                if ($('input[type=radio]:checked:visible').length == 0) {
                            
                    return false;
                }
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).next().fadeIn(500);
                });
                var el = $('#progress');
                el.width(el.width() + 36.3 + 'px');
            });
            $('.btnPrev').click(function(){
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).prev().fadeIn(500)
                });
                var el = $('#progress');
                el.width(el.width() - 36.3 + 'px');
            })
            $('.btnShowResult').click(function(){
                var arr = $('input[type=radio]:checked');
                var ans = jQuiz.userAnswers = [];
                for (var i = 0, ii = arr.length; i < ii; i++) {
                    ans.push(arr[i].getAttribute('id'))
                }
            })
            $('.btnShowResult').click(function(){
                $('#progress').width(300);
                $('#progressKeeper').hide();
                var results = jQuiz.checkAnswers();
                var resultSet = '';
                var trueCount = 0;
                for (var i = 0, ii = results.length; i < ii; i++){
                    if (results[i] == true) trueCount++;
                    // resultSet += '<div> Pitanje ' + (i + 1) + ' je ' + results[i] + '</div>'
                }
                resultSet += '<div class="totalScore"><b>Tvoj rezultat je ' + trueCount * 1 + ' bodova.<br>Proveri u koju grupu spadaš.<hr></b><b>0-5</b> - Mnogo mi je žao! Tvoji rezultati nisu zadovoljavajući. Kako bi što bezbednije koristio/la internet i bez rizika po sebe, predlažemo ti da ponovo pročitaš tekstove o bezbednosti dece na internetu i rešiš ovaj test ponovo.<br><b>6-10</b> - Umeš i bolje! Radi tvoje veće sigurnosti i bezbednosti na internetu, predlažemo ti da ponovo pročitaš tekstove sa sajta i rešiš ovaj test. Rezultati sigurno neće izostati. Samo hrabro napred!<br><b>11-15</b> - Odlično si shvatio/la važnost bezbednosti dece na internetu. Bravo! Sve pohvale! Želimo ti bezbedno korišćenje interneta.</div>'
                $('#resultKeeper').html(resultSet).show();
            })
        }
    };
    jQuiz.init();
})