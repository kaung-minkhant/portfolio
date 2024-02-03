import { FeaturedWorksComponent } from "../../components/featuredworks/featuredworks.comp"
import { IntroductionComponent } from "../../components/introduction/introduction.comp"
import { RecentPostsComponent } from "../../components/recentposts/recentposts.comp"
import { Landing } from "./landing.styles"

export const LandingView = () => {
  // throw new Error('Supriseeee!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae maiores corrupti dolore sapiente libero, fugiat recusandae nisi, omnis placeat ducimus possimus quis neque perspiciatis earum maxime quam ullam eveniet dignissimos.')
  return (
    
    <Landing>
      <IntroductionComponent />
      <RecentPostsComponent />
      <FeaturedWorksComponent />
    </Landing>
  )
}