export interface Course {
    courseId: number;
    imageSource: string;
    title:string;
    description: string;
    creator: string;
    rating: number;
    reviewCount: number;
    duration: number;
    lecturesCount: number;
    level: string;
    lectures?: Lecture[];
    requirements?: Requirement[];
    reviews?: Review[];
}

export interface Lecture {
    lectureDesc: string;
    lectureDuration: number;
}
export interface Requirement{
    addrequrirements: string;
}
export interface Review {
    profileImage: string,
    reviwerName: string,
     reviewRating: number;
     addreviews: string;
}