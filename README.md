# Govt. Web Crawler – Automated Index2 Document Downloader

## Objective
This project automates the process of downloading multiple **Index2** documents from the Maharashtra government website [igrmaharashtra.gov.in](https://igrmaharashtra.gov.in). These documents are crucial for data extraction and analysis, and manually downloading them is time-consuming. This website simplifies the process by automating the document retrieval based on user inputs.


![image](https://github.com/user-attachments/assets/bd9d3cdb-896a-4bbf-aefa-e75150804c00)


## Features
- **Automated Document Download**: Fetches and downloads multiple Index2 documents based on user input.
- **User-Friendly Web Interface**: Allows users to input relevant details (district, taluka, village, document number, year, etc.).
- **Batch Processing**: Supports bulk downloads for an entire year.
- **Organized Storage**: Saves documents systematically for easy access.
- **Future Expansion**: Ready for integration with data extraction and analysis in the next phase.

## Tech Stack
| Component       | Technology Used                                    |
|-----------------|----------------------------------------------------|
| **Frontend**    | HTML, CSS, JavaScript (React/Vanilla JS)           |
| **Backend**     | Python (Flask/Django) or Node.js (Express.js)        |
| **Web Scraping**| Selenium / BeautifulSoup                           |
| **Database**    | SQLite / PostgreSQL (for storing logs & metadata)  |
| **Storage**     | Local storage or AWS S3 (optional for cloud storage) |

## How It Works

### 1. User Inputs Details
- The website provides a form where users input details like **district, taluka, village, document number, and year**.
- Users can request bulk downloads for an entire year.

### 2. Automation Fetches Documents
- The backend scrapes the Maharashtra government website and downloads Index2 documents.
- The documents are stored systematically for easy retrieval.

### 3. Organized Storage
- The documents are saved in a structured format.
- Future updates will include data extraction and analysis.

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Gaurrav7Yadav/Govt.-Web-Crawler.git
cd Govt.-Web-Crawler

