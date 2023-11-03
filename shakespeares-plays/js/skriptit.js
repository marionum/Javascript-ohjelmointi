document.addEventListener("DOMContentLoaded", function () {
    var buttonClicked = false;
  
    document.getElementById("executeButton").addEventListener("click", function () {
      if (!buttonClicked) {
      
        addIconsAndStyles();
        addGrayBackground();
        addGrayToTableRows();
        addGrayToSection3Paragraphs();
        displayShakespeareImage();
        buttonClicked = true;

      }
    });
  });
  
  function addIconsAndStyles() {
    var links = document.querySelectorAll("a");
  
    links.forEach(function (link) {
      link.classList.add("dotted");
  
      if (link.getAttribute("href").toLowerCase().startsWith("mailto:")) {
        link.innerHTML = "email";
  
        var envelopeIcon = document.createElement("i");
        envelopeIcon.classList.add("fas", "fa-envelope");
        link.parentElement.insertBefore(envelopeIcon, link);
  
        // Space after the envelope icon
        var spaceAfterEnvelope = document.createTextNode(" ");
        link.parentElement.insertBefore(spaceAfterEnvelope, link);
  
        // External link icon
        var externalLinkIcon = document.createElement("i");
        externalLinkIcon.classList.add("fas", "fa-external-link-alt");
        link.parentElement.insertBefore(externalLinkIcon, link);
      }
  
      if (link.getAttribute("href").toLowerCase().endsWith(".pdf")) {
        var pdfIcon = document.createElement("i");
        pdfIcon.classList.add("fas", "fa-file-pdf");
  
     
        var spaceAfterHamlet = document.createTextNode(" ");
        link.parentElement.insertBefore(spaceAfterHamlet, link.nextSibling);
  
        // Space before the PDF icon
        var spaceBeforePdfIcon = document.createTextNode(" ");
        link.parentElement.insertBefore(spaceBeforePdfIcon, link.nextSibling);
  
        link.parentElement.insertBefore(pdfIcon, link.nextSibling);
      } else if (link.textContent === "As you like it") {
        var externalLinkIcon = link.previousElementSibling;
        if (externalLinkIcon && externalLinkIcon.classList.contains("fa-external-link-alt")) {
          link.parentElement.removeChild(externalLinkIcon);
        }
      } else if (link.getAttribute("href").toLowerCase().startsWith("http://") || link.getAttribute("href").toLowerCase().startsWith("https://")) {
        // Adding external link icon 
        var externalLinkIcon = document.createElement("i");
        externalLinkIcon.classList.add("fas", "fa-external-link-alt");
  
        // Add a space before the external link icon
        var spaceBeforeExternalLinkIcon = document.createTextNode(" ");
        link.parentElement.insertBefore(spaceBeforeExternalLinkIcon, link);
  
        link.parentElement.insertBefore(externalLinkIcon, link);
      }
    });


    // Red dotted line style
    var style = document.createElement("style");
    style.innerHTML = 'a.dotted { text-decoration: none; border-bottom: 3px dotted red; padding-bottom: 0px; transition: border-bottom 0.3s ease; }';
    document.head.appendChild(style);
  }

  //Grey background
  function addGrayBackground() {
    var playTypeElements = document.querySelectorAll(".play-type");
  
    playTypeElements.forEach(function (playType) {
      playType.classList.add("gray-background");
    });
  }

  function addGrayToTableRows() {
    var tableRows = document.querySelectorAll(".table-container table tr");
  
    tableRows.forEach(function (row, index) {
      if (index % 2 === 1) {
        // Apply gray background to odd-indexed rows (second row and so on)
        row.classList.add("gray-background");
      }
    });
  }
  
  function addGrayToSection3Paragraphs() {
    var section3Paragraphs = document.querySelectorAll(".section3 p");
  
    section3Paragraphs.forEach(function (paragraph, index) {
      if (index % 2 === 1) {
        // Apply gray background to odd-indexed paragraphs
        paragraph.classList.add("gray-background");
      }
    });
  }

  function displayShakespeareImage() {
    var shakespeareImage = document.createElement("img");
    shakespeareImage.src = "images/shakespeares.jpg"; 
    shakespeareImage.alt = "Shakespeare"; 
    shakespeareImage.classList.add("shakespeare-image"); 
  
    var shakespeareImageContainer = document.getElementById("shakespeareImage");
    shakespeareImageContainer.appendChild(shakespeareImage);
  }
