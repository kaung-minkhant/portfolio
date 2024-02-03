import { Header, RecentPosts, Title, ViewAll } from "./recentposts.styles"


export const RecentPostsComponent = () => {
  return (
    <RecentPosts>
      <Header>
        <Title>Recent Posts</Title>
        <ViewAll>View All</ViewAll>
      </Header>

    </RecentPosts>
  )
}