import { TestimonalsCard } from "./TestimonalsCard";
import test1 from '../../assets/test1.jpg';
import '../ui/Testimonals.css'

export const Testimonals = () => {
  const data = [
    {
      profile: test1,
      username: "Zoya Khan",
      testimonals: "I love how Pippo reacts when I'm consistent. It feels like I have a tiny companion cheering me on through study sessions. The habit tracker actually makes me feel proud instead of pressured."
    },
    {
      profile: test1,
      username: "Anaya Shaikh",
      testimonals: "The way Pippo shows different moods based on my progress is so comforting. It’s not just about streaks — it’s about how I’m feeling. I’ve started journaling more just to see my little cat smile"
    },
    {
      profile: test1,
      username: "ARJUN",
      testimonals: "It’s hard to stay consistent when your mind’s all over the place. Pippo made it feel like I was taking care of a pet — which somehow made it easier to take care of myself too."
    },
    {
      profile: test1,
      username: "Sara",
      testimonals: "When I didn’t finish my habits for a few days, Pippo looked a little sad — and somehow, it made me want to get back on track gently. No guilt, just soft encouragement. I genuinely feel seen."
    },
    {
      profile: test1,
      username: "Kiran",
      testimonals: "Most apps make me feel like I’m behind. Pippo makes me feel safe. Like I can grow slowly, and that’s okay. Even the cat’s mood helps me be more aware of my own"
    },
  ];

  return (
    <section className="testimonals-wrapper">
      <div className="scroll-container">
        {data.map((item, index) => (
          <TestimonalsCard
            key={index}
            profile={item.profile}
            username={item.username}
            testimonals={item.testimonals}
          />
        ))}
      </div>
    </section>
  );
};