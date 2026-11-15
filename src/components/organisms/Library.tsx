import BookItem from "@/components/molecules/BookItem.tsx";
import aliceAndBobCover from "@/assets/images/books/aliceandboblearnapplicationsecurity.jpg";
import dockerWorkshopCover from "@/assets/images/books/dockerworkshop.webp";
import eloquentJavaScriptCover from "@/assets/images/books/Eloquent_JavaScript_4th_edition.jpg";
import howIRobBanksCover from "@/assets/images/books/howirobbanks_andothersuchplaces.jpg";
import ifItsSmartCover from "@/assets/images/books/ifitssmartitsvulnerable.jpg";
import linuxForSysadminsCover from "@/assets/images/books/linuxforsystemadministrators.webp";
import nodejsDesignPatternsCover from "@/assets/images/books/nodejsdesignpatterns.webp";
import restfulWebApiCover from "@/assets/images/books/restfulwebapipatternsandpracticescookbook.webp";
import learningDddCover from "@/assets/images/books/learningdomain-drivendesign.jpg";
import serverlessAwsCover from "@/assets/images/books/serverlessdevelopmentonaws.webp";
import cleanArchitectureCover from "@/assets/images/books/getyourhandsdirtyoncleanarchitecture_secondedition.webp";
import softwareArchitectureWebCover from "@/assets/images/books/softwarearchitectureforwebdevelopers.webp";
import youDontKnowJsCover from "@/assets/images/books/youdontknowjsyet.webp";

const books: BookItem[] = [
  {
    title: "RESTful Web API Patterns and Practices Cookbook",
    author: "Mike Amundsen",
    image: restfulWebApiCover.src,
    url: "https://www.oreilly.com/library/view/restful-web-api/9781098106737/",
  },
  {
    title: "Learning Domain-Driven Design",
    author: "Vlad Khononov",
    image: learningDddCover.src,
    url: "https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/",
  },
  {
    title: "Serverless Development on AWS",
    author: "Sheen Brisals, Luke Hedger",
    image: serverlessAwsCover.src,
    url: "https://www.oreilly.com/library/view/serverless-development-on/9781098141929/",
  },
  {
    title: "Linux for System Administrators",
    author: "Viorel Rudareanu, Daniil Baturin",
    image: linuxForSysadminsCover.src,
    url: "https://www.oreilly.com/library/view/linux-for-system/9781803247946/",
  },
  {
    title: "Node.js Design Patterns, Third Edition",
    author: "Mario Casciaro, Luciano Mammino",
    image: nodejsDesignPatternsCover.src,
    url: "https://www.oreilly.com/library/view/node-js-design-patterns/9781839214110/",
  },
  {
    title: "The Docker Workshop",
    author: "Vincent Sesto, Onur Yılmaz, Sathsara Sarathchandra",
    image: dockerWorkshopCover.src,
    url: "https://www.oreilly.com/library/view/the-docker-workshop/9781838983444/",
  },
  {
    title: "Get Your Hands Dirty on Clean Architecture, 2nd Edition",
    author: "Tom Hombergs",
    image: cleanArchitectureCover.src,
    url: "https://www.oreilly.com/library/view/get-your-hands/9781839211966/",
  },
  {
    title: "Software Architecture for Web Developers",
    author: "Mihaela Roxana Ghidersa",
    image: softwareArchitectureWebCover.src,
    url: "https://www.oreilly.com/library/view/software-architecture-for/9781803237916/",
  },
  {
    title: "You Don't Know JS: Up & Going",
    author: "Kyle Simpson",
    image: youDontKnowJsCover.src,
    url: "https://www.oreilly.com/library/view/you-dont-know/9781491924471/",
  },
  {
    title: "If It's Smart, It's Vulnerable",
    author: "Mikko Hyppönen",
    image: ifItsSmartCover.src,
    url: "https://www.goodreads.com/book/show/61461818-if-it-s-smart-it-s-vulnerable",
  },
  {
    title: "How I Rob Banks: And Other Such Places",
    author: "FC Barker",
    image: howIRobBanksCover.src,
    url: "https://www.goodreads.com/en/book/show/78294430-how-i-rob-banks",
  },
  {
    title: "Alice and Bob Learn Application Security",
    author: "Tanya Janca",
    image: aliceAndBobCover.src,
    url: "https://www.goodreads.com/en/book/show/48693509-alice-and-bob-learn-application-security",
  },
  {
    title: "Eloquent JavaScript, 4th Edition",
    author: "Marijn Haverbeke",
    image: eloquentJavaScriptCover.src,
    url: "https://www.goodreads.com/book/show/216524172-eloquent-javascript-4th-edition",
  },
];

const Library = () => {
  return (
    <section className="mx-auto max-w-[70rem] px-6 py-4 sm:py-8">
      <h2 className="mx-auto max-w-md py-2 text-xl font-bold text-white">
        Library
      </h2>

      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-2 sm:grid-cols-4">
        {books.map((book) => (
          <BookItem key={book.title} {...book} />
        ))}
      </div>
    </section>
  );
};

export default Library;
