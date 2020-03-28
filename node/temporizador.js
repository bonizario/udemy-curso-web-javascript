const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 0', () => {
  console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(() => {
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(0, 6)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log('Executando Tarefa 2!', new Date().getSeconds());
});
