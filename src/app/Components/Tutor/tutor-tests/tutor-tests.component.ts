import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TestService } from "src/app/Services/test.service";

@Component({
  selector: "app-tutor-tests",
  templateUrl: "./tutor-tests.component.html",
  styleUrls: ["./tutor-tests.component.scss"]
})
export class TutorTestsComponent implements OnInit {
  pageTitle = "Tests";
  subject;
  subjectId;

  tests = [
    { name: "Polymorphism", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    { name: "Arrays", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    { name: "Pointers", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    { name: "Overloading", noOfQuest: 10, totalTime: 15, userName: "Rahul" },
    {
      name: "Memory Allocaion",
      noOfQuest: 10,
      totalTime: 15,
      userName: "Rahul"
    },
    { name: "Overriding", noOfQuest: 10, totalTime: 15, userName: "Rahul" }
  ];

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.subjectId = params["subjectId"];
    });

    this.testService.getTestsBySubjectId(this.subjectId).subscribe(response => {
      console.log(response);
    });
  }
}
