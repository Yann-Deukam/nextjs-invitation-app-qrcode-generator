import React from "react";

const InvitationSuccess = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="max-w-xl p-6 bg-white shadow-sm rounded-md">
        <img
          src="/check.gif"
          alt="Succès"
          className="mx-auto mb-4 w-24 h-24 sm:w-20 sm:h-20"
        />
        <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold my-4">
          Invitation a été envoyée avec succès
        </h1>
        <p className="text-gray-700 sm:text-base md:text-lg font-semibold">
          Vérifiez votre WhatsApp.
        </p>
        <p className="text-sm mt-4 text-gray-500">
          Si vous ne voyez pas le message, attendez 5 à 10 minutes puis essayez
          à nouveau de générer une invitation.
        </p>
      </div>
    </main>
  );
};

export default InvitationSuccess;
