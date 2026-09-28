import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";


const volunteersData = {
  "2024-2025": [
  { name: "Satyam Raj Singh", role: "EVENTS AND PLANNING" },
  { name: "Sahil Kumar Sahu", role: "EVENTS AND PLANNING" },
  { name: "Ayush Aggarwal", role: "EVENTS AND PLANNING" },
  { name: "Srishti Yadav", role: "EVENTS AND PLANNING" },
  { name: "Shreya Singh", role: "EVENTS AND PLANNING" },
  { name: "Ayush Gautam", role: "EVENTS AND PLANNING" },
  { name: "Ayush Katiyar", role: "EVENTS AND PLANNING" },
  { name: "Nishat", role: "EVENTS AND PLANNING" },
  { name: "Shreya Vishwakarma", role: "EVENTS AND PLANNING" },
  { name: "Divyanka Pandey", role: "EVENTS AND PLANNING" },
  { name: "Asad Khan", role: "MARKETING AND OUTREACH" },
  { name: "Devanshi Srivastava", role: "MARKETING AND OUTREACH" },
  { name: "Rishi Raj Singh", role: "MARKETING AND OUTREACH" },
  { name: "Apurv", role: "MARKETING AND OUTREACH" },
  { name: "Amitabh Chaturvedi", role: "MARKETING AND OUTREACH" },
  { name: "Aakarsh", role: "FINANCE AND SPONSORSHIP" },
  { name: "Bulbul Singh", role: "FINANCE AND SPONSORSHIP" },
  { name: "Gopal Aggarwal", role: "FINANCE AND SPONSORSHIP" },
  { name: "Shobhit Jain", role: "FINANCE AND SPONSORSHIP" },
  { name: "Sumit Mishra", role: "FINANCE AND SPONSORSHIP" },
  { name: "Ridam Baranwal", role: "FINANCE AND SPONSORSHIP" },
  { name: "Amarjeet Pandey", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Anubhav Singh", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Lakshit Teotia", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Saloni Singh", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Manya Nigam", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Shubham Raj", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Suyash Khare", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Ankush Kumar", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Preetam Ray", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Amit Kumar Gupta", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Devendra Pratap Singh", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Harsh Kumar", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Nandini Goel", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Pratibha Maurya", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Jahanvi Pratap", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Ishan Arora", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },

  ],
 "2025-2026": [
  // MARKETING AND OUTREACH
  { name: "Tanya Mishra", role: "MARKETING AND OUTREACH" },
  { name: "Suyash Dwivedi", role: "MARKETING AND OUTREACH" },
  { name: "Prateek Singh", role: "MARKETING AND OUTREACH" },
  { name: "Arnav Garg", role: "MARKETING AND OUTREACH" },
  { name: "Kashish Mani Tripathi", role: "MARKETING AND OUTREACH" },
  { name: "Mallika Rathi", role: "MARKETING AND OUTREACH" },
  { name: "Parth Srivastava", role: "MARKETING AND OUTREACH" },
  { name: "Anshika Gupta", role: "MARKETING AND OUTREACH" },
  { name: "Aditya Choudhary", role: "MARKETING AND OUTREACH" },
  { name: "Asad Khan", role: "MARKETING AND OUTREACH" },
  { name: "Shobhit", role: "MARKETING AND OUTREACH" },
  { name: "Devanshi Srivastava", role: "MARKETING AND OUTREACH" },
  { name: "Rishi Raj Singh Rajpoot", role: "MARKETING AND OUTREACH" },
  { name: "Bulbul", role: "MARKETING AND OUTREACH" },

  // DIGITAL INFRASTRUCTURE AND DEVELOPMENT
  { name: "Amit Kumar Gupta", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Pratibha Maurya", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Jhanvi", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Harsh Kumar", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Preet Chauhan", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Deevonika", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Deepak", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },

  // EVENTS AND PLANNING
  { name: "Suhani Gupta", role: "EVENTS AND PLANNING" },
  { name: "Abhinay", role: "EVENTS AND PLANNING" },
  { name: "Aditya Rauniyar", role: "EVENTS AND PLANNING" },
  { name: "Harshita Dubey", role: "EVENTS AND PLANNING" },
  { name: "Anushree Mishra", role: "EVENTS AND PLANNING" },
  { name: "Ashutosh Dev", role: "EVENTS AND PLANNING" },
  { name: "Kriti Kaushik", role: "EVENTS AND PLANNING" },
  { name: "Saurav Tyagi", role: "EVENTS AND PLANNING" },
  { name: "Divyansh", role: "EVENTS AND PLANNING" },
  { name: "Ayush Aggarwal", role: "EVENTS AND PLANNING" },
  { name: "Ayush Katiyar", role: "EVENTS AND PLANNING" },
  { name: "Sahil Sahu", role: "EVENTS AND PLANNING" },

  // DIGITAL AND SOCIAL MEDIA
{ name: "Ritish", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Anurag Jai Singh", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Aryan Chaudhary", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Mahak Khurana", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Apurv Verma", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Anvita Shukla", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Saloni Singh", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Lakshit", role: "DIGITAL AND SOCIAL MEDIA" },
{ name: "Manya", role: "DIGITAL AND SOCIAL MEDIA" },


  // VISUAL MEDIA AND PRODUCTION
  { name: "Aabhas Viswas", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Ashish Kashyap", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Devansh Dev", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Satyam Yadav", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Shivani Srivastava", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Shreya Palak", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Shubham", role: "VISUAL MEDIA AND PRODUCTION" },
],

};

const Volunteers = ({ currentTeam }) => {
  const teamVolunteers = volunteersData[currentTeam] || [];
  const roles = [...new Set(teamVolunteers.map((v) => v.role))];
  const [selectedRole, setSelectedRole] = useState(null);

  // Automatically reset role filter when team year changes
  useEffect(() => {
    setSelectedRole(null);
  }, [currentTeam]);

  const filteredVolunteers = selectedRole
    ? teamVolunteers.filter((volunteer) => volunteer.role === selectedRole)
    : teamVolunteers;

  return (
    <section className="bg-black text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
      {/* Section Header */}
      <div className="text-center mb-8">
        <Fade cascade>
          <p className="text-[#ffde59] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            VOLUNTEERS
          </p>
        </Fade>
        <h2 className="text-3xl sm:text-5xl font-bold">
          Team <span className="text-[#ffed59]">{currentTeam}</span> Volunteers
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          The passionate minds driving operations, events, outreach, and technical infrastructure.
        </p>
      </div>

      {/* Role Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedRole(null)}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
            selectedRole === null
              ? "bg-[#ffde59] text-black shadow-[0_0_15px_rgba(255,222,89,0.3)]"
              : "bg-[#131412] text-zinc-300 border border-[#26250F] hover:border-zinc-600 hover:text-white"
          }`}
        >
          All Roles ({teamVolunteers.length})
        </button>

        {roles.map((role, index) => {
          const count = teamVolunteers.filter((v) => v.role === role).length;
          return (
            <button
              key={index}
              onClick={() => setSelectedRole(role)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedRole === role
                  ? "bg-[#ffde59] text-black shadow-[0_0_15px_rgba(255,222,89,0.3)]"
                  : "bg-[#131412] text-zinc-300 border border-[#26250F] hover:border-zinc-600 hover:text-white"
              }`}
            >
              {role} ({count})
            </button>
          );
        })}
      </div>

      {/* Volunteers Grid or Empty State */}
      {filteredVolunteers.length === 0 ? (
        <div className="p-8 text-center text-zinc-400 bg-[#131412] rounded-2xl border border-[#26250F] max-w-md mx-auto">
          No volunteers found for this filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredVolunteers.map((volunteer, index) => (
            <div
              key={index}
              className="bg-[#131412] rounded-xl p-4 flex flex-col justify-center items-center text-center border border-[#26250F] hover:border-[#ffde59]/40 transition-colors shadow-sm"
            >
              <h3 className="text-base font-semibold text-white mb-1">{volunteer.name}</h3>
              <p className="text-[#ffde59] text-xs font-medium tracking-wide">{volunteer.role}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Volunteers;