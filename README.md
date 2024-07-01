# BTU React Final Project - **Jobs Website**

Website - [Jobs Application](https://btu-react-final.vercel.app/)

---

### Description

ვაკანსიების აპლიკაცია, აპლიკაციების ინფორმაციას ვიღებ Mock Api-დან, შემდგომ ფავორიტებში დასამახსოვრებლად ვიყენებ localstorage-ს.

შესაძლებელია ახალი ვაკანსიის დამატება API-ში.

ინფორმაციის წამოსაღებად ვიყენებ fetchApi-ს

localstorage-ის დამხმარე ფუნქციები გაწერილია helper.js ფაილში.

ყველა სტილი დაწერილია index.css ფაილში.

არის სულ სამი Layout(Career, Help, Main), რომლის მიხედვითაც აწყობილია სტრუქტურა.

გვერდების ფუნქციონალისთვის გამოვიყენე react-router loader, action და
errorElement

მარტივი ანიმაციები(Framer motion) ვაკანსიის ქარდზე და ვაკანსიის დეტალურ ქარდზე.

---

### Libraries and packages
Animations - [Framer motion](https://www.framer.com/motion/)
Icons - [heroicons/react](https://www.npmjs.com/package/@heroicons/react)
Toast - [react-toastify](https://www.npmjs.com/package/react-toastify)

---

### API

Jobs api - [Mock API](https://6682553a04acc3545a091590.mockapi.io/api/jobs/jobs)

**Object Model**
```json
{
    "title": "Direct Program Strategist",
    "salary": "475.68",
    "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    "location": "Renton",
    "deadline": "2024-09-16T00:15:07.054Z",
    "company": "Dietrich - Bergstrom",
    "id": "1"
}
```

**Endpoints**
```http
GET /jobs
```

```http
GET /jobs/:id
```

```http
POST /jobs
```










