// Define the Member class
class Member {
    // Static property to track total members
    static totalMembers = 0;
  
    // Constructor for Member instances
    constructor(memberId, name, membershipType) {
      this.memberId = memberId; // Unique ID for the member
      this.name = name; // Member's name
      this.membershipType = membershipType; // Membership type (e.g., Premium)
      this.membershipStatus = true; // Active membership by default
      Member.totalMembers++; // Increment total members
    }
  
    // Method to register a member
    register() {
      console.log(`Member ${this.name} (ID: ${this.memberId}) has been registered.`);
    }
  
    // Method to renew membership
    renewMembership() {
      this.membershipStatus = true;
      console.log(`Membership for ${this.name} has been renewed.`);
    }
  
    // Static method to get total registered members
    static getTotalMembers() {
      console.log(`Total registered members: ${Member.totalMembers}`);
    }
  }
  
  // Define the Trainer class
  class Trainer {
    // Static property to track total trainers
    static totalTrainers = 0;
  
    // Constructor for Trainer instances
    constructor(trainerId, name, specialization) {
      this.trainerId = trainerId; // Unique ID for the trainer
      this.name = name; // Trainer's name
      this.specialization = specialization; // Specialization (e.g., Strength Training)
      Trainer.totalTrainers++; // Increment total trainers
    }
  
    // Method to assign a trainer to a member
    assignToMember(memberName) {
      console.log(`Trainer ${this.name} is assigned to member ${memberName}.`);
    }
  
    // Method to view the trainer's schedule
    viewSchedule() {
      console.log(`Trainer ${this.name} is viewing their schedule.`);
    }
  
    // Static method to get total trainers
    static getTotalTrainers() {
      console.log(`Total trainers: ${Trainer.totalTrainers}`);
    }
  }
  
  // Define the GymSession class
  class GymSession {
    // Static property to track total sessions
    static totalSessions = 0;
  
    // Constructor for GymSession instances
    constructor(sessionId, sessionName, capacity) {
      this.sessionId = sessionId; // Unique ID for the session
      this.sessionName = sessionName; // Session name (e.g., Full-Body)
      this.capacity = capacity; // Maximum capacity
      this.bookedSlots = 0; // Current booked slots
      GymSession.totalSessions++; // Increment total sessions
    }
  
    // Method to book a session
    bookSession() {
      if (this.bookedSlots < this.capacity) {
        this.bookedSlots++;
        console.log(`Session ${this.sessionName} booked successfully. Remaining slots: ${this.capacity - this.bookedSlots}`);
      } else {
        console.log(`Session ${this.sessionName} is fully booked.`);
      }
    }
  
    // Method to cancel a booking
    cancelBooking() {
      if (this.bookedSlots > 0) {
        this.bookedSlots--;
        console.log(`Booking for session ${this.sessionName} canceled. Remaining slots: ${this.capacity - this.bookedSlots}`);
      } else {
        console.log(`No bookings to cancel for session ${this.sessionName}.`);
      }
    }
  
    // Static method to get total sessions
    static getTotalSessions() {
      console.log(`Total gym sessions: ${GymSession.totalSessions}`);
    }
  }
  
  // Example Usage
  // Create members
  const member1 = new Member("M001", "Paul", "Premium");
  member1.register();
  member1.renewMembership();
  
  // Create a trainer
  const trainer1 = new Trainer("T001", "Tappi", "Strength Training");
  trainer1.assignToMember("Paul");
  trainer1.viewSchedule();
  
  // Create a gym session
  const session1 = new GymSession("S001", "Full-body", 10);
  session1.bookSession();
  session1.cancelBooking();
  
  // Display static data
  Member.getTotalMembers();
  Trainer.getTotalTrainers();
  GymSession.getTotalSessions();
  
