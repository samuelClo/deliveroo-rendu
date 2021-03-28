import {HOCFirstItemComponent} from "./HOCFirstItemComponent";

import {FeaturesComponent} from "./FeaturesComponent";
import {NewsComponents} from "./NewsComponent";
import {CategoriesComponent} from "./CategoriesComponent";

export const FirstItemFeaturesComponent = HOCFirstItemComponent(FeaturesComponent)
export const FirstItemNewsComponent = HOCFirstItemComponent(NewsComponents)
export const FirstItemCategoriesComponent = HOCFirstItemComponent(CategoriesComponent)

export {ButtonCircleComponent} from './ButtonCircleComponent'
