import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Заколка-краб (9 шт)',
      description: 'Набор заколок краб. Отлично держат хвост, пучок, идеальны как для тонких волос, так и для объемных. Крабик станет идеальным украшением в повседневной жизни, на работу или учебу, а так же станет прекрасным украшением для вечерней прически.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h99/80296739766302.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pfa/p03/19218403.jpeg?format=gallery-large',
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/zakolka-krab-9-sht-109989625/?c=750000000'
    },

    {
      name: 'Weleda Belebendes Haar Tonikum Тоник 100 мл',
      description: 'Укрепляющее средство для роста волос с розмарином. Укрепляющее средство Weleda с маслом розмарина и ценными экстрактами очитка и листьев хрена улучшает питание корней волос, уменьшает выпадение и стимулирует естественный рост волос, укрепляет волосы и поддерживает здоровье кожи головы. Свежий аромат розмарина придает продукту особенную нотку. Подходит для восстановления волос после родов и кормления грудью.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/pee/9335219.PNG?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/pec/9335220.PNG?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/pec/9335222.PNG?format=gallery-large'
      ],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/weleda-belebendes-haar-tonikum-tonik-100-ml-104708149/?c=750000000'
    },

    {
      name: 'CP-1 Bright Complex Intense Nourishing Шампунь 500 мл',
      description: 'Питательный шампунь для волос от Esthetic House.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/h93/84807192379422.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/hb4/84807192412190.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hca/hb7/84807192608798.jpg?format=gallery-large'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/esthetic-house-cp-1-bright-complex-intense-nourishing-shampun-500-ml-24100807/?c=750000000'
    },

    {
      name: 'Estel Professional Vita Терапия Маска 500 мл',
      description: 'Маска "Vita-терапия" для повреждённых волос CUREX THERAPY (500 мл) Арт. CR500/М5 Интенсивно питает сухие, повреждённые волосы. Входящие в состав натуральные компоненты бетаин и масло жожоба увлажняют волосы и способствуют сохранению влаги. Пантенол и витамин Е восстанавливают повреждённую структуру волос, делая их здоровыми и красивыми. Результат: Увлажнение и питание. Восстановление структуры волос. Эластичность и блеск волос. Применение: нанести маску на чистые влажные волосы, равномерно распределить по всей длине, не затрагивая корни волос. Время воздействия 5-10 минут. Тщательно смыть водой.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p71/p94/12293555.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p94/12293556.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p4e/p97/12293560.jpg?format=gallery-large'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/estel-professional-vita-terapija-maska-500-ml-102974545/?c=750000000'
    },

    {
      name: 'Kerasys Elegance & Sensual Фиалка Шампунь 600 мл',
      description: 'Специально разработанная формула шампуня KeraSys Elegance and Sensual для тонких и ослабленных волос, укрепляет и восстанавливает структуру волос по всей длине. Волосы обретают жизненную силу, эластичность и объем. Содержит витамины А и Е, масло оливы и масло ши',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h56/85372448374814.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/hc9/86479612870686.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h02/86479613067294.jpg?format=gallery-large'
      ],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/kerasys-elegance-sensual-fialka-shampun-600-ml-100561312/?c=750000000'
    },

    {
      name: 'A-Beauty Повязка на голову 1 шт',
      description: 'Мягкая повязка для удобного умывания и ухода за лицом.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/haa/69010933514270.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/hef/69010934038558.jpg?format=gallery-large'
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/a-beauty-povjazka-na-golovu-1-sht-108899317/?c=750000000'
    },

    {
      name: 'Meidu 3 in 1 черный шампунь оттеночный',
      description: 'Шампунь-краска MEIDU®️ 3 в 1. Профессиональная растительная формула для быстрого, безопасного и натурального окрашивания волос.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/haa/ha8/64510777032734.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h51/64510780309534.jpg?format=gallery-large'
      ],
      rating: 3.9,
      link: 'https://kaspi.kz/shop/p/meidu-3-in-1-chernyi-shampun-ottenochnyi-500-ml-105741913/?c=750000000'
    },

    {
      name: 'Shiseido маска Fino Premium Touch',
      description: 'Маска укрепляет, питает, восстанавливает, наполняя каждый волосок силой, а также дарит волосам притягательный цветочный аромат. Ухаживающие компоненты предотвращают сухость , ломкость',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h74/86498035531806.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h41/86765496565790.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h51/86765496729630.jpg?format=gallery-large'
      ],
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/shiseido-maska-fino-premium-touch-vosstanovlenie-i-uvlazhnenie-s-pchelinym-matochnym-molochkom-230-ml-108384966/?c=750000000'
    },

    {
      name: 'Welcos Confume Argan шампунь 750 мл',
      description: 'Шампунь для волос с аргановым маслом Confume Argan бережно очищает волосы и кожу головы, питает и укрепляет корни. Активизирует рост волос, предотвращает рассечение концов, придает объем и шелковистость',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h3a/87214789525534.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h57/87214789656606.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h7c/87214789722142.jpg?format=gallery-large'
      ],
      rating: 3.4,
      link: 'https://kaspi.kz/shop/p/welcos-confume-argan-shampun-750-ml-102371828/?c=750000000'
    },

    {
      name: 'Спрей TIGI Bed Head Superstar Queen for a day',
      description: 'Этот универсальный спрей тройного действия станет твоим ежедневным помощником в достижении объемных, густых и текстурированных волос. Добавляет ощущение густоты и плотности. Запоминает форму причёски без склеивания и утяжеления.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/heb/hf0/85758703468574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbd/h64/85758703534110.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h77/85758703566878.jpg?format=gallery-large'
      ],
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/sprei-tigi-bed-head-superstar-queen-for-a-day-dlja-pridanija-ob-ema-311-ml-106129329/?c=750000000'
    },
  ]

  imgIndex: {[key: string]: number } = {};

  constructor() {
    this.products.forEach((product) => {
      this.imgIndex[product.name] = 0;
    });
  }

  nextImg(product: Product) {
    const currentIndex = this.imgIndex[product.name];
    const nextIndex = (currentIndex + 1) % product.imageUrls.length;
    this.imgIndex[product.name] = nextIndex;
  }

  prevImg(product: Product) {
    const currentIndex = this.imgIndex[product.name];
    const prevIndex = (currentIndex - 1 + product.imageUrls.length) % product.imageUrls.length;
    this.imgIndex[product.name] = prevIndex;
  }

  // Share buttons w or t
shareVisible: { [key: string]: boolean } = {};

// to change w or t 
toggleShare(product: Product) {
  this.shareVisible[product.name] = !this.shareVisible[product.name];
}

// to send via w or t 
shareOnWhatsApp(product: Product) {
  const url = `https://api.whatsapp.com/send?text=Check out this product: ${product.link}`;
  window.open(url, '_blank');
}

shareOnTelegram(product: Product) {
  const url = `https://t.me/share/url?url=${product.link}&text=Check out this product`;
  window.open(url, '_blank');
}
}