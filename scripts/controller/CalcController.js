class CalcController{

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl  = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){
       // chamar o metodo para atualizar 1ms
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);


    }


    // eventos para os botoes //#endregion

    initButtonsEvents(){



// metodo de click para obter o click 
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {
            //click para pegar o evento na tela 
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace("btn-", "" ));
            });

        });
    }


    
    // atualizar hora e data 
    setDisplayDateTime(){
     
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
          day: "2-digit",
          month: "long",
          year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }


    // get para data e hora //#endregion

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }


    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    // Metodos geters and seters , entrada e saida. //#endregion
    
    get displayCalc(){
        
        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    } 
     
    get currentDate(){
        return new Date();
    }
 
    set currentDate(value){
        this._currentDate = value;
    }

}