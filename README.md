<h1><strong>Food Blog Application</strong></h1>

Step 1 : Create a new app by running the following command in terminal
    ng new fba_v1

Step 2 : Once created, go into the app folder by running the following command in terminal 
    cd fba_v1

Step 3 : Install bootstrap & json-server by running the following command in terminal 
    npm i --save bootstrap json-server

Step 4 : Generate the module blog by running the following command in terminal 
    ng g m blog -m=app

Step 5 : Generate the classes blog & contact inside the blog module by running the following command in terminal 
    ng g cl blog/classes/blog/blog --type=model
    ng g cl blog/classes/contact/contact --type=model

Step 6 : Generate the services blog & contact inside the blog module by running the following command in terminal 
    ng g s blog/services/blog/blog
    ng g s blog/services/contact/contact

Step 7 : Generate the components home, blog, contact, show, error & navbar inside the blog module by running the following command in terminal 
    ng g c blog/components/home
    ng g c blog/components/blog
    ng g c blog/components/contact
    ng g c blog/components/show
    ng g c blog/components/error
    ng g c blog/components/navbar

Step 8 : Create a folder files inside the blog module and a json file api-placeholder with an empty json error
    {
        "blog":[],
        "contact":[]
    }

Step 9 : Import bootstrap in the styles.css file and give the body background a velvet colour
    @import '~bootstrap/dist/css/bootstrap.min.css';

    body{
        background-color: #781E2A;
    }

Step 10 : Import bootstrap in the main.ts file
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Step 11 : Add the routes in the app-routing.module.ts file and add property { useHash: true } in RouterModule to avoid 404 issues while hosting the application.
    const routes: Routes = [
        {path:'home', component:HomeComponent},
        {path:'blog', component:BlogComponent},
        {path:'contact', component:ContactComponent},
        {path:'show', component:ShowComponent},
        {path:'', redirectTo:'/home', pathMatch:'full'},
        {path:'**', component:ErrorComponent}
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
    })

Step 12 : Add the objects to the blog.model.ts file
    export class Blog {
        id?:number;
        date?:Date;
        title?:string;
        author?:string;
        message?:string;
        category?:string;

        constructor(id?:number, date?:Date, title?:string, author?:string, message?:string, category?:string){
            this.id=id;
            this.date=date;
            this.title=title;
            this.author=author;
            this.message=message;
            this.category=category;
        }
    }

Step 13 : Add the objects to the contact.model.ts file
    export class Contact {
        Name?:string;
        Email?:string;
        Password?:string;
        Phone?:number;
        Address_Line_1?:string;
        Address_Line_2?:string;
        City?:string;
        State?:string;
        Country?:string;
        Zip?:number;

        constructor(Name?:string, Email?:string, Password?:string, Phone?:number, Address_Line_1?:string, Address_Line_2?:string, City?:string, State?:string, Country?:string, Zip?:number){
            this.Name = Name;
            this.Email = Email;
            this.Password = Password;
            this.Phone = Phone;
            this.Address_Line_1 = Address_Line_1;
            this.Address_Line_2 = Address_Line_2;
            this.City = City;
            this.State = State;
            this.Country = Country;
            this.Zip = Zip;
        }
    }

Step 14 : Import the HTTPClientModule in blog.module.ts to enable HTTPClient which can make API calls like get, post, put & delete
    import { HttpClientModule } from '@angular/common/http';

    @NgModule({
        imports: [
            HttpClientModule
        ]
    })

Step 15 : Declare the url for API CRUD operation, provide the methods for API CRUD & Inject the HTTPClient into the constructor to perform the calls in the blog.service.ts file
   export class BlogService {

    url:string ='http://localhost:3000/blogs';

    constructor(private http:HttpClient) { }

        createBlog(blog:Blog){
            return this.http.post(this.url, blog);
        }

        getAllBlogs(){
            return this.http.get<Blog[]>(this.url);
        }

        getBlogById(id:number){
            return this.http.get<Blog>(this.url+`/${id}`);
        }

        updateBlog(id:number, blog:Blog){
            return this.http.put(this.url+`/${id}`, blog);
        }

        deleteBlog(id:number){
            return this.http.delete(this.url+`/${id}`);
        }
    }

Step 16 : Declare the url for API CRUD operation, provide the methods for API CRUD & Inject the HTTPClient into the constructor to perform the calls in the contact.service.ts file
   export class ContactService {

    url:string ='http://localhost:3000/contact';

    constructor(private http:HttpClient) { }

        createContact(contact:Contact){
            return this.http.post(this.url, contact);
        }

        getAllContacts(){
            return this.http.get<Contact[]>(this.url);
        }
    }

Step 17 : Import the FormsModule (template driven) & ReactiveFormsModule (model driven) in blog.module.ts to be used by components implementing forms
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    @NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule
        ]
    })

Step 18 : Create functions in navbar.component.ts, which will be available to navbar.component.html to implement using functions. Inject Router from RouterModule to navigate to contact & blog
    export class NavbarComponent implements OnInit {

        constructor(private router: Router) { }

        ngOnInit(): void {
        }

        goToHome(){
            this.router.navigate(['/home']);
        }

        goToBlog(){
            this.router.navigate(['/blog']);
        }

        goToContact(){
            this.router.navigate(['/contact']);
        }

        goToShow(){
            this.router.navigate(['/show']);
        }
    }

Step 19 : Create the HTML elements to be displayed in the browser by entering the following in navbar.component.html file
    <nav class="navbar navbar-expand-lg bg-dark my-2">
        <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" (click)="goToHome()">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" (click)="goToBlog()">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" (click)="goToContact()">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" (click)="goToShow()">Show Contacts</a>
                </li>
            </ul>
        </div>
    </nav>

Step 20 : Create the HTML elements to be displayed in the browser (by entering the following in home.component.html file). Ensure that the app-navbar tag is entered so that the navbar is displayed in the browser along with home component elements. 
    <div class="container bg-warning px-5 py-4">
        <h1 class="text-center">Welcome to Velvet Embers</h1>
        <p>Velvet Embers is a food blogging space where foodies can create, read, update and delete recipies.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Consequat semper viverra nam libero justo laoreet sit amet cursus. Et tortor at risus viverra. Tellus in metus vulputate eu. Nunc lobortis mattis aliquam faucibus purus in massa. Eu feugiat pretium nibh ipsum. Amet aliquam id diam maecenas ultricies mi eget mauris. Eget nunc scelerisque viverra mauris. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Sagittis vitae et leo duis ut. Libero volutpat sed cras ornare arcu. Nisl tincidunt eget nullam non nisi est sit. Posuere sollicitudin aliquam ultrices sagittis orci. Egestas congue quisque egestas diam in arcu cursus euismod quis. In fermentum posuere urna nec tincidunt praesent semper. Ut consequat semper viverra nam libero justo.</p>
        <p>Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Commodo viverra maecenas accumsan lacus. Consequat nisl vel pretium lectus quam id. Ultrices tincidunt arcu non sodales. Dignissim convallis aenean et tortor at risus viverra. Ipsum consequat nisl vel pretium. Amet facilisis magna etiam tempor orci. Egestas sed sed risus pretium quam vulputate. Auctor augue mauris augue neque gravida in. Id diam maecenas ultricies mi eget.</p>
    </div>


Step 21 : Invoke the methods from the BlogService in the blog-page.component.ts, which will be available to blog.component.html to implement using functions.
    export class BlogComponent implements OnInit {

        blogs:any[] = new Array<Blog[]>();
        blog = new Blog();
        msg:string='';

        constructor(private cs: BlogService) { }

        ngOnInit(): void {
            this.getAllBlogs();
        }

        getAllBlogs(){
            this.cs.getAllBlogs()
            .subscribe(response => this.blogs = response);
        }

        createBlog(){
            this.cs.createBlog(this.blog)
            .subscribe(response => this.msg="Blog Added Successfully");
        }

        clear(){
            this.blog = new Blog();
            this.msg = '';
            this.getAllBlogs();
        }

        getBlogById(id:number){
            this.cs.getBlogById(id)
            .subscribe(response => this.blog = response);
        }

        updateBlog(){
            this.cs.updateBlog(this.blog.id??NaN, this.blog)
            .subscribe(response => this.msg="Blog Updated Successfully");
        }

        deleteBlog(id:number){
            this.cs.deleteBlog(id)
            .subscribe(response => this.msg="Blog Deleted Successfully");
        }
    }

Step 22 : Create the HTML elements to be displayed in the browser (by entering the following in blog.component.html file) and invoke the functions created in blog.component.ts. Ensure that the app-navbar tag is entered so that the navbar is displayed in the browser along with blog component elements. 
    <div class="container bg-warning p-4">
        <table class="table table-bordered table-hover bg-secondary text-white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Message</th>
                    <th>Category</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let blog of blogs">
                    <td>{{blog.id}}</td>
                    <td>{{blog.date}}</td>
                    <td>{{blog.title}}</td>
                    <td>{{blog.author}}</td>
                    <td>{{blog.message}}</td>
                    <td>{{blog.category}}</td>
                    <td>
                        <button class="btn btn-primary m-2" (click)="getBlogById(blog.id)">select</button>
                        <button class="btn btn-danger m-2" (click)="deleteBlog(blog.id)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr style="border: 1px solid green;"/>
        <div class="row d-flex justify-content-center">
            <div class="col-10">
                <div class="row form-group my-1 d-flex justify-content-center">
                    <label class="col-2 control-label" for="id">ID</label>
                    <div class="col-4">
                        <input type="number" [(ngModel)]="blog.id" class="form-control" id="id"/>
                    </div>
                </div>
                <div class="row form-group my-1 d-flex justify-content-center">
                    <label class="col-2 control-label" for="date">Date</label>
                    <div class="col-4">
                        <input type="date" [(ngModel)]="blog.date" class="form-control" id="date"/>
                    </div>
                </div>
                <div class="row form-group my-1 d-flex justify-content-center">
                    <label class="col-2 control-label" for="title">Title</label>
                    <div class="col-4">
                        <input type="text" [(ngModel)]="blog.title" class="form-control" id="title"/>
                    </div>
                </div>
                <div class="row form-group my-1 d-flex justify-content-center">
                    <label class="col-2 control-label" for="author">Author</label>
                    <div class="col-4">
                        <input type="text" [(ngModel)]="blog.author" class="form-control" id="author"/>
                    </div>
                </div>
                <div class="row form-group my-1 d-flex justify-content-center">
                    <label class="col-2 control-label" for="message">Message</label>
                    <div class="col-4">
                        <input type="text" [(ngModel)]="blog.message" class="form-control" id="message"/>
                    </div>
                </div>
                <div class="row form-group my-1 d-flex justify-content-center">
                    <label class="col-2 control-label" for="category">Category</label>
                    <div class="col-4">
                        <input type="text" [(ngModel)]="blog.category" class="form-control" id="category"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="btn-group m-2 col-6">
                <button class="btn btn-primary" (click)="createBlog()">create</button>
                <button class="btn btn-primary" (click)="clear()">clear</button>
                <button class="btn btn-primary" (click)="updateBlog()">update</button>
            </div>
        </div>
        <hr style="border: 1px solid blue;">
        <div class="row d-flex justify-content-center">
            {{msg}}
        </div>
    </div>

Step 23 : Invoke the methods from the ContactService in the contact.component.ts, which will be available to contact.component.html to implement using functions.
    export class ContactComponent implements OnInit {

    msg:string="";
    contactForm:any;
    
    constructor(private fb:FormBuilder, private cs: ContactService) {
        this.contactForm = fb.group({
        'Name': ['', [Validators.required]],
        'Email': ['', [Validators.required, Validators.email]],
        'Password': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
        'Phone': ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        'Address_Line_1': ['',[Validators.required, Validators.maxLength(50)]],
        'Address_Line_2': ['',[]],
        'City': ['',[Validators.required]],
        'State': ['',[Validators.required]],
        'Country': ['',[Validators.required]],
        'Zip': ['',[Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
        })
    }

    ngOnInit(): void {
    }

    onSubmit(){
        this.cs.createContact(this.contactForm.value).subscribe(
        (response) => console.log(response),
        (err) => console.log(err),
        () => console.log("send completed")
        )
        this.msg="Contact Details Submitted Successfully";
    }

    }

Step 24: Create the properties of the tags in contact.component.css file, which will be implemented in contact.component.html file
    input.ng-invalid.ng-touched {
        border: 1px solid red;
    }

    .feedback-invalid{
        font-size: smaller;
        color: red;
    }

Step 25 : Create the HTML elements to be displayed in the browser (by entering the following in contact.component.html file) and invoke the functions created in contact.component.ts. Ensure that the app-navbar tag is entered so that the navbar is displayed in the browser along with contact component elements. 
    <div class="container bg-warning my-4 p-4">
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="row text-center">
                <h3>Enter your contact details and submit. We will get in touch with you shortly.</h3>
            </div>
            <div class="row my-1">
                <div class="col-md-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" formControlName="Name">
                    <span class="feedback-invalid" *ngIf="contactForm.get('Name')!.invalid && contactForm.get('Name')!.touched">Please do not leave field blank</span>
                </div>
                <div class="col-md-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="abcd@xyz.com" formControlName="Email">
                    <span class="feedback-invalid" *ngIf="contactForm.get('Email')!.invalid && contactForm.get('Email')!.touched">Please enter a valid email address</span>
                </div>
                <div class="col-md-3">
                    <label for="inputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword" formControlName="Password">
                    <span class="feedback-invalid" *ngIf="contactForm.get('Password')!.invalid && contactForm.get('Password')!.touched">Please enter a password between 8 & 15 characters</span>
                </div>
                <div class="col-md-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="number" class="form-control" id="inputPhone" formControlName="Phone">
                    <span class="feedback-invalid" *ngIf="contactForm.get('Phone')!.invalid && contactForm.get('Phone')!.touched">Please enter a valid 10 digit phone number</span>
                </div>
            </div>
            <div class="row col-md-12 my-1 px-3">
                <label for="inputAddress" class="form-label">Address Line 1</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" formControlName="Address_Line_1">
                <span class="feedback-invalid" *ngIf="contactForm.get('Address_Line_1')!.invalid && contactForm.get('Address_Line_1')!.touched">Please do not leave Address Line 1 blank</span>
            </div>
            <div class="row col-12 my-1 px-3">
                <label for="inputAddress2" class="form-label">Address Line 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" formControlName="Address_Line_2">
            </div>
            <div class="row my-1">
                <div class="col-md-3">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" formControlName="City">
                    <span class="feedback-invalid" *ngIf="contactForm.get('City')!.invalid && contactForm.get('City')!.touched">Please do not leave City blank</span>
                </div>
                <div class="col-md-3">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" formControlName="State">
                        <option selected>Choose...</option>
                        <option>Delhi</option>
                        <option>Kolkata</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                    </select>
                    <span class="feedback-invalid" *ngIf="contactForm.get('State')!.invalid && contactForm.get('State')!.touched">Please do not leave State blank</span>
                </div>
                <div class="col-md-3">
                    <label for="inputCountry" class="form-label">Country</label>
                    <input type="text" class="form-control" id="inputCountry" formControlName="Country">
                    <span class="feedback-invalid" *ngIf="contactForm.get('Country')!.invalid && contactForm.get('Country')!.touched">Please do not leave Country blank</span>
                </div>
                <div class="col-md-3">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="number" class="form-control" id="inputZip" formControlName="Zip">
                    <span class="feedback-invalid" *ngIf="contactForm.get('Zip')!.invalid && contactForm.get('Zip')!.touched">Please do not leave Zip blank</span>
                </div>
            </div>
            <div class="col-12 text-center my-3">
                <button type="submit" class="btn btn-primary col-4" [disabled]="contactForm.invalid && contactForm.touched">Submit</button>
            </div>
            <div class="col-12 text-center my-auto">
                <strong>{{msg}}</strong>
            </div>
        </form>
    </div>

Step 26 : Invoke the methods from the ContactService in the show.component.ts, which will be available to show.component.html to implement using functions.
    export class ShowComponent implements OnInit {

        contacts = new Array<Contact>();

        constructor(private cs: ContactService) { }

        ngOnInit(): void {
            this.fetchAllContacts();
        }

        fetchAllContacts(){
            this.cs.getAllContacts().subscribe(
            (response) => {this.contacts = response},
            (err) => console.log(err),
            () => console.log("completed")
            )
        }
    }

Step 27 : Create the HTML elements to be displayed in the browser (by entering the following in show.component.html file) and invoke the functions created in show.component.ts. Ensure that the app-navbar tag is entered so that the navbar is displayed in the browser along with show component elements. 
    <div class="container bg-warning">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Address Line 1</th>
                    <th>Address Line 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Zip</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let contact of contacts; let i = index">
                    <td>{{i+1}}</td>
                    <td>{{contact.Name}}</td>
                    <td>{{contact.Email}}</td>
                    <td>{{contact.Password}}</td>
                    <td>{{contact.Phone}}</td>
                    <td>{{contact.Address_Line_1}}</td>
                    <td>{{contact.Address_Line_2}}</td>
                    <td>{{contact.City}}</td>
                    <td>{{contact.State}}</td>
                    <td>{{contact.Country}}</td>
                    <td>{{contact.Zip}}</td>
                </tr>
            </tbody>
        </table>
    </div>

Step 28 : Invoke the methods from the router in the error.component.ts, which will be available to error.component.html to implement using functions.
    export class ErrorComponent implements OnInit {

        constructor(private router: Router) { }

        ngOnInit(): void {
        }

        goToContact(){
            this.router.navigate(['/contact']);
        }
    }

Step 29 : Create the HTML elements to be displayed in the browser (by entering the following in error.component.html file) and invoke the functions created in error.component.ts. Ensure that the app-navbar tag is entered so that the navbar is displayed in the browser along with error component elements. 
    <div class="container my-5">
        <div class="text-center text-dark bg-warning">
            <h1>404 Error. Page Not Found.</h1>
            <h2>Check the website URL else contact the team <a (click)="goToContact()" class="text-primary">here</a></h2>
        </div>
    </div>

Step 30 : Create the properties of the tags in app.component.css file, which will be implemented in app.component.html file
    .logoarea{
        background-image: url("https://media.istockphoto.com/photos/glowing-charcoal-briquettes-background-texture-picture-id474944786?k=20&m=474944786&s=612x612&w=0&h=pOLOTlHzUHJ2dc5uRQ7Jd2LC-oOjBnw6ki9szkkGolU=");
        /* background-image: url(../assets/istockphoto-glowing-charcoal-briquettes-background-texture.jpg); */
        color: burlywood;
        -webkit-text-stroke: 1px black;
    }

Step 31 : Export the NavbarComponent in blog.module.ts so that it is available in app.component.html
    @NgModule({
        exports: [
            NavbarComponent
        ]
    })


Step 32 : Ensure that router-outlet tag is mentioned in app.component.html file, which will enable display of the components in routes array of app-routing.module.ts in the browser.
    <div class="container">
        <div class="row logoarea my-2">
            <h1 class="text-center">Velvet Embers</h1>
        </div>
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    </div>

Step 33 : View the app in browser by running the following command in terminal
    ng serve --open

Step 34 : Host the json file on json-server (by running the following command in terminal) to serve APIs for the application to consume. This can be later replaced by web APIs or APIs created in NodeJS with Express & a database (like MongoDB)
    json-server --watch .\src\app\blog\files\api-placeholder.json