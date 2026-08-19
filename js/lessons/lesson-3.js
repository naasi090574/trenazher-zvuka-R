window.LESSON_3 = {
  id: 'lesson-3',
  title: 'Тайна книжного города',
  progressKey: 'book-city-progress-v1',
  stages: [
    {shortTitle: 'Вход', title: 'Вход в книжный город'},
    {shortTitle: 'Страницы', title: 'Ожившие страницы'},
    {shortTitle: 'Буква', title: 'Последняя буква'},
    {shortTitle: 'Полки', title: 'Три книжные полки'},
    {shortTitle: 'Буквы', title: 'Потерянные буквы'},
    {shortTitle: 'Слово', title: 'Собери слово'},
    {shortTitle: 'Шифр', title: 'Буквенный шифр'},
    {shortTitle: 'Мостики', title: 'Слоговые мостики'},
    {shortTitle: 'Картинка', title: 'Найди картинку'},
    {shortTitle: 'Лишнее', title: 'Что здесь лишнее?'},
    {shortTitle: 'Редактор', title: 'Редактор книжного города'},
    {shortTitle: 'Письмо', title: 'Секретное письмо'}
  ],
  initialProgress() {
    return {currentStage: 0, completed: [], stage1Completed: [], stage1CompletedWords: [], stage1Current: 0, stage1WordOrder: [], stage1CardOrders: {}, stage2Task: 0, stage2Opened: [], stage2Order: [], stage2FindOrder: [], stage2FindCurrent: 0, stage2FindDone: [], stage2MatchOrder: [], stage2Matched: [], stage2LastPhrase: ''};
  },
  loadProgress() {
    try {
      return {...this.initialProgress(), ...JSON.parse(localStorage.getItem(this.progressKey) || '{}')};
    } catch {
      return this.initialProgress();
    }
  },
  saveProgress(progress) {
    localStorage.setItem(this.progressKey, JSON.stringify(progress));
  },
  resetProgress() {
    localStorage.removeItem(this.progressKey);
  }
};
