// ****************Задача 1*******************

class Weapon {
    
    constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.range = range;
      this.initialDurability = durability;
    }

    takeDamage(damage) {
      if (this.durability < damage) {
        this.durability = 0;
      } else {
        this.durability = this.durability - damage;
      }
    }

    getDamage() {
        let damage;

        if (this.durability >= (this.initialDurability * 0.3)) {
          damage = this.attack;
        } else if (this.durability === 0) {
          damage = 0;
        } else {
          damage = this.attack / 2;   
        }

        return damage;
    }

    isBroken() {
        return this.durability === 0;
    }

    repairAndImprove(name, percent) {
        if (name === 'durability') {
            
            if (this.durability === 0) {
                console.log(`Нельзя восстановить полностью сломанную вещь: ${this.durability}`);
            }

            this.durability = this.durability * (percent/100 + 1);
            
            if (this.durability > this.initialDurability) {
                this.durability = this.initialDurability;
            } 
        }

        if (name === 'range') {
            this.range = this.range * (percent/100 + 1);
        }

        if (name === 'attack') {
            this.attack = this.attack * (percent/100 + 1);
        }
    }

}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 200, 4);
const axe = new Weapon('Секира', 27, 800, 2);
const stormStick = new Weapon('Посох Бури', 10, 300, 3);

sword.takeDamage(400);
console.log(`Проверка получения урона. Урон по sword должен быть 400, остаток 100: ${sword.durability}`);

sword.repairAndImprove('durability', 20);
console.log(`Проверка восстановления прочности. Durability должен быть 120: ${sword.durability}`);

sword.repairAndImprove('durability', 5000);
console.log(`Проверка восстановления прочности. Durability должен быть 500: ${sword.durability}`);

sword.repairAndImprove('range', 50);
console.log(`Проверка улучшения радиуса. Range должен быть 1.5: ${sword.range}`);

sword.takeDamage(400);
console.log(`Проверка получения урона. Урон по sword должен быть 400, остаток 100: ${sword.durability}`);

sword.getDamage();
console.log(`Проверка нанесения урона. Урон должен быть 12,5: ${sword.getDamage()}`); 

sword.takeDamage(600);
console.log(`Проверка получения урона. Урон по sword не должен упасть ниже 0: ${sword.durability}`); 

sword.getDamage();
console.log(`Проверка нанесения урона. Урон должен быть 0: ${sword.getDamage()}`);

console.log(`Проверка поломки. Должно быть true: ${sword.isBroken()}`);

arm.takeDamage(600);
console.log(`Проверка получения урона на бесконечном значении. Должно быть значение Infinity: ${arm.durability}`);

console.log(`Проверка поломки. Должно быть false: ${arm.isBroken()}`);

// ****************Задача 2*******************
class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
        this.initialDurability = this.durability;
    }
}

class Arm extends Weapon {
    constructor() {
        super();
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
        this.initialDurability = this.durability;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
        this.initialDurability = this.durability;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 500;
        this.range = 1;
        this.initialDurability = this.durability;
    }
}

class Stick extends Weapon {
    constructor() {
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
        this.initialDurability = this.durability;
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.initialDurability = this.durability;
    }
}

class StormStick extends Stick {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
        this.initialDurability = this.durability;
    }
}


const bow1 = new Bow();
const longBow1 = new LongBow();
console.log(`Проверка наследования. Должно быть durability 200: ${longBow1.durability}`);

longBow1.takeDamage(20);

console.log(`Проверка наследования. Должно быть durability 180: ${longBow1.durability}`);;

// ****************Задача 3*******************

class StudentLog {
    constructor(name) {
        this.name = name;
  }

    getName() {
        let name = this.name;
        return name;
  }

    addGrade(grade, subject) {
        if (grade !== 1 && grade !== 2 && grade !== 3 && grade !== 4 && grade !== 5) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
            if (!this[subject]) {
              this[subject] = [];
              return this[subject].length;
            }
            return this[subject].length;
        }

        if (!this[subject]) {
            this[subject] = [grade];
        } else {
            this[subject].push(grade);
        }
        
        // console.log(this);
        

        return this[subject].length;
    }

    getAverageBySubject(subject) {
        let sumMark = 0;
        let average = 0;
        if (!this[subject]) {
            average = 0;
        } else {
          for (let i = 0; i < this[subject].length; i++) {
            sumMark = this[subject][i] + sumMark;
          }
          average = sumMark / this[subject].length;
        }
          
        return average;
    }

    getTotalAverage() {
        let marksQuantity = 0;
        let subjectSum = 0;
        for ( let subject in this ) {
            if (this[subject] !== this.name) {
              for (let i = 0; i < this[subject].length; i++) {
                  // console.log(`Цифра массива ${this[subject][i]}`);
                  subjectSum = this[subject][i] + subjectSum;
                  // console.log(`Сумма ${subjectSum}`);
                  // console.log(`Массив ${this[subject]}`);
                  marksQuantity++;  
              }
            }
        }
        let averageSubjectSum = subjectSum / marksQuantity;
        if (marksQuantity === 0) {
            averageSubjectSum = 0;
        }
        return averageSubjectSum;
        }

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()); // Олег Никифоров

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getTotalAverage()); // 3,75




// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 1

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
