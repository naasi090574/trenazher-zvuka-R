window.LESSON_2 = {
  id: 'lesson-2',
  title: 'Парад воздушных шаров',
  progressKey: 'balloon-parade-progress-v1',
  stages: [
    {id: 'wake-square', shortTitle: 'Площадь', title: 'Разбуди площадь'},
    {id: 'set-rhythm', shortTitle: 'Ритм', title: 'Задай ритм'},
    {id: 'fill-balloons', shortTitle: 'Шары', title: 'Наполни шары'},
    {id: 'parade-rehearsal', shortTitle: 'Репетиция', title: 'Парадная репетиция'},
    {id: 'gather-participants', shortTitle: 'Участники', title: 'Собери участников'},
    {id: 'make-announcement', shortTitle: 'Объявление', title: 'Составь объявление'},
    {id: 'grand-launch', shortTitle: 'Запуск', title: 'Большой запуск'}
  ],
  loadProgress() {
    const initial = {currentStage: 0, unlocked: 0, completed: [], stage1Voices: [], tasks: 0, finished: false};
    try {
      return {...initial, ...JSON.parse(localStorage.getItem(this.progressKey) || '{}')};
    } catch {
      return initial;
    }
  },
  saveProgress(progress) {
    localStorage.setItem(this.progressKey, JSON.stringify(progress));
  }
};
