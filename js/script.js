window.addEventListener('DOMContentLoaded', () => {
    let firstScreen = document.querySelector('header'),
        question = document.querySelector('.question'),
        title = document.querySelector('.title_question'),
        questionItemCard = document.querySelectorAll('.question_wrapper-item'),
        questionItemCardImg = document.querySelectorAll('.question_wrapper-item img'),
        questionItemCardDescr = document.querySelectorAll('.question_wrapper-item_descr'),
        questionWrapper = document.querySelectorAll('.question_wrapper'),
        lastScreen = document.querySelector('.footer'),
        questionIndex = 0,
        firstBtn = document.querySelector('.btn_first'),
        nextBtn = document.querySelector('.btn_next'),
        prevBtn = document.querySelector('.btn_prev'),
        progressBar = document.querySelector('.question_progress-bar_complete'),
        progressProcent = document.querySelector('.procent'),
        answers = [],
        titles = ['Какой формы вам нужна кухня?',
        'Выберите стиль, который вам нравится',
        'Выберите примерный размер кухни, метры погонные',
        'Выберите материал фасадов',
        'Выберите тип столешницы',
        'Выберите тип фурнитуры',
        'Когда нужна кухня?',
        'Планируемый бюджет на вашу кухню?',
        'Мы дарим подарки! Выберите желаемый подарок:'];
    


    firstBtn.addEventListener('click', () => {
        firstScreen.style.opacity = '0';
        question.style.bottom = '0';
        setTimeout(() => {
            firstScreen.style.display = 'none';
        }, 1000);
    });

    function showQuest ()   {
        questionWrapper.forEach( item => {item.classList.remove('active');});
        questionWrapper[questionIndex].classList.add('active');
    }
    function changeTitle () {
        title.textContent = titles[questionIndex];
    }
    function progressCalc ()    {
        let progress = 100;
        progress = Math.round(progress/questionWrapper.length*questionIndex);
        progressBar.style.width = `${progress}%`;
        progressProcent.textContent = progress;
    }
    function changeQuest () {
        if (questionIndex != 0) {
            prevBtn.style.display = 'inline';
        } else {
            prevBtn.style.display = 'none';
        }
        changeTitle();
        showQuest();
        progressCalc();
    }

    prevBtn.addEventListener('click', () => {
        questionIndex--;
        changeQuest();
    });
    nextBtn.addEventListener('click', () => {
        if (answers[questionIndex] != undefined)    {
            nextBtn.style.opacity = '1';
            questionIndex++;
            changeQuest();
        } else {
        }
    });


    for (let i = 0; i < questionItemCard.length; i++)   {
        questionItemCard[i].addEventListener('click', () => {
            answers[questionIndex] = questionItemCardDescr[i].textContent;
            console.log(answers);
            if (questionIndex < questionWrapper.length - 1) {
                questionIndex++;
                changeQuest();
            } else {
                question.style.display = 'none';
                lastScreen.style.display = 'block';
                setTimeout(() => {
                    lastScreen.style.bottom = '0';
                    lastScreen.style.opacity = '1';
                }, 100);
            }
            
        });
    }
});