import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductListComponent],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories: Category[] = [
    {
      name: 'Hair Care',
      products: [
        {id: 1, name: 'Заколка краб', description: 'Набор заколок краб. Идеальны как для тонких волос, так и для объемных.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h99/80296739766302.jpg?format=gallery-large', rating: 4.5, link: 'https://kaspi.kz/shop/p/zakolka-krab-9-sht-109989625/?c=750000000', likes: 0, category: 'Hair Care'},
        {id: 2, name: 'Weleda Belebendes Haar Tonikum тоник', description: 'Укрепляющее средство для роста волос с розмарином.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/pee/9335219.PNG?format=gallery-large', rating: 4.6, link: 'https://kaspi.kz/shop/p/weleda-belebendes-haar-tonikum-tonik-100-ml-104708149/?c=750000000', likes: 0, category: 'Hair Care'},
        {id: 3, name: 'ESTHETIC HOUSE CP-1 Bright Complex Intense Nourishing шампунь', description: 'Питательный шампунь для волос от Esthetic House.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h93/84807192379422.jpg?format=gallery-large', rating: 3.9, link: 'https://kaspi.kz/shop/p/esthetic-house-cp-1-bright-complex-intense-nourishing-shampun-500-ml-24100807/?c=750000000', likes: 0, category: 'Hair Care'},
        {id: 4, name: 'Estel Professional Vita Терапия Маска', description: 'Интенсивно питает сухие, повреждённые волосы.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p94/12293555.jpg?format=gallery-large', rating: 4.3, link: 'https://kaspi.kz/shop/p/estel-professional-vita-terapija-maska-500-ml-102974545/?c=750000000', likes: 0, category: 'Hair Care'},
        {id: 5, name: 'Meidu 3 in 1 черный шампунь оттеночный', description: 'Профессиональная растительная формула для окрашивания волос.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/haa/ha8/64510777032734.jpg?format=gallery-large', rating: 2.8, link: 'https://kaspi.kz/shop/p/meidu-3-in-1-chernyi-shampun-ottenochnyi-500-ml-105741913/?c=750000000', likes: 0, category: 'Hair Care'}
      ]
    },

    {
      name: 'Body Care',
      products: [
        {id: 1, name: 'Tesori Oriente Byzantium крем-гель', description: 'Гель для душа приглашает Вас окунуться в мир эстетики.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h96/h62/66598627508254.jpg?format=gallery-medium', rating: 3.5, link: 'https://kaspi.kz/shop/p/tesori-d-oriente-byzantium-krem-gel-250-ml-107930969/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Body Care'},
        {id: 2, name: 'The Act скраб Набор', description: 'Набор скрабов-бестселлеров The Act в подарочной упаковке с фрагментами картины.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h38/83172423925790.jpg?format=gallery-medium', rating: 4.6, link: 'https://kaspi.kz/shop/p/the-act-skrab-nabor-shokolad-greipfrut-kokos-dlja-tela-3-sht-po-300-g-112861860/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Body Care'},
        {id: 3, name: 'MIXIT скраб с ароматом амбра и бобов тонка', description: 'MIXIT скраб с ароматом амбра и бобов тонка для рук, для ног, для тела 300 мл', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h70/86264769708062.jpg?format=gallery-medium', rating: 2.7, link: 'https://kaspi.kz/shop/p/mixit-skrab-s-aromatom-ambra-i-bobov-tonka-dlja-ruk-dlja-nog-dlja-tela-300-ml-120342740/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Body Care'},
        {id: 4, name: 'EPSALUTE Epsom английская соль', description: 'Эпсом соль для ванн — это 100% сульфат магния, без добавок, примесей, ароматизаторов, красителей и консервантов.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h72/85904291037214.jpg?format=gallery-medium', rating: 1.9, link: 'https://kaspi.kz/shop/p/epsalute-epsom-angliiskaja-sol-5000-g-101971010/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Body Care'},
        {id: 5, name: 'Parli Cosmetics Bubble bath', description: 'Воздушная пена для ванны с ароматом сладкой вишни расслабляет и создаёт ощущение безмятежности.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p08/p36/15779312.jpeg?format=gallery-medium', rating: 3.5, link: 'https://kaspi.kz/shop/p/parli-cosmetics-bubble-bath-cherry-pena-dlja-vanny-480-ml-132167398/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Body Care'}
      ]
    },

    {
      name: 'Skin Care',
      products: [
        {id: 1, name: 'Round Lab крем Birch Juice Moisturizing SPF50', description: 'Солнцезащитный крем с березовым соком и гиалуроновой кислотой обеспечивает надежную защиту от ультрафиолетового излучения.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hcd/86663479197726.jpg?format=gallery-medium', rating: 3.4, link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Body Care'},
        {id: 2, name: 'The Ordinary сыворотка Niacinamide', description: 'Сыворотка предназначена для ухода за жирной, склонной к высыпаниям кожей.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pf7/pde/22594987.jpg?format=gallery-medium', rating: 4.8, link: 'https://kaspi.kz/shop/p/the-ordinary-syvorotka-niacinamide-10-zinc-1-dlja-litsa-dlja-zony-dekol-te-30-ml-100703687/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Skin Care'},
        {id: 3, name: 'Dr. Althea крем 345 Relief', description: 'Восстанавливающий крем с ниацинамидом 345 Relief Cream - инновационное средство для ухода за кожей с постакне.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium', rating: 4.6, link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Skin Care'},
        {id: 4, name: 'LANEIGE маска Lip Sleeping Mask', description: 'Ночная восстанавливающая маска для губ - интенсивное восстанавливающее средство для кожи губ.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p29/p94/16687695.jpg?format=gallery-medium', rating: 3.2, link: 'https://kaspi.kz/shop/p/laneige-maska-lip-sleeping-mask-ex-berry-3-g-104726768/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Skin Care'},
        {id: 5, name: 'EVO Laboratoires Пантенол бальзам', description: 'Гигиеническая помада предназначена для ежедневного ухода за нежной кожей губ.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h51/h11/64225237467166.jpg?format=gallery-medium', rating: 4.1, link: 'https://kaspi.kz/shop/p/evo-laboratoires-pantenol-bal-zam-102676565/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Skin Care'}
      ]
    },

    {
      name: 'Make Up',
      products: [
        {id: 1, name: 'Пудра RELOUIS HD Powder Fixing transparent', description: 'Специальные абсорбирующие компоненты в составе пудры поглощают себум.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/hd0/63967831031838.jpg?format=gallery-medium', rating: 3.9, link: 'https://kaspi.kz/shop/p/relouis-hd-powder-fixing-transparent-rassypchataja-01-belyi-100968225/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Make Up'},
        {id: 2, name: 'Кисть для тонального крема', description: 'Кисть для макияжа, для тонального крема, для маски, легко наносится на кожу, ультратонкая кисть.', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h57/85429604253726.jpg?format=gallery-medium', rating: 4.2, link: 'https://kaspi.kz/shop/p/kist-dlja-tonal-nogo-krema-serebrjanyi-1-117403333/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Make Up'},
        {id: 3, name: 'Gulf Girl 3 steps набор для контуринга', description: 'Палетка для контуринга', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hb9/86704543596574.jpg?format=gallery-medium', rating: 2.5, link: 'https://kaspi.kz/shop/p/gulf-girl-3-steps-nabor-dlja-konturinga-01-122092710/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Make Up'},
        {id: 4, name: 'Belor design Multitalent set', description: 'Belor design Multitalent set румяна, скульптор, хайлайтер, набор для контуринга 01', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd5/85120032800798.jpg?format=gallery-medium', rating: 2.3, link: 'https://kaspi.kz/shop/p/belor-design-multitalent-set-rumjana-skul-ptor-hailaiter-nabor-dlja-konturinga-01-106946497/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Make Up'},
        {id: 5, name: 'Flomar Waterproof Lipliner', description: 'Flomar Waterproof Lipliner набор карандашей 12 шт', imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h87/79318807117854.jpg?format=gallery-medium', rating: 4.1, link: 'https://kaspi.kz/shop/p/flomar-waterproof-lipliner-nabor-karandashei-12-sht-106297618/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hXMr6FXjhFKekjP3UOThbXr&gclid=CjwKCAiAk8G9BhA0EiwAOQxmftx0OmtpFEK-BegU_35dk99AiV1TqJU28HKj230I2U1z3_TmC5h9XhoCNdEQAvD_BwE', likes: 0, category: 'Make Up'} 
      ]
    }
  ]

selectedCategory: Category | null = null;

selectCategory(category: Category) {
    this.selectedCategory = category;
}

likeProduct(product : Product) {
  product.likes++;
}

removeProduct(product : Product) {
  if(this.selectedCategory){
    this.selectedCategory.products = this.selectedCategory.products.filter(p => p != product);
  }
}
}