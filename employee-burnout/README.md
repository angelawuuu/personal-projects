This project was developed as a submission for PittChallenge, a Hackathon.

Employee burnout is a major concern for healthcare workers. Burnout among health workers harms both patient care and safety, including factors like decreased time spent with the patient, increased errors and infections, and staffing shortages. In response, to mitigate employee burnout, our team developed a Machine Learning model (Gradient Boosted Linear Regression) that creates optimal schedules for workers in order to minimize their burnout.  Using a quick questionaire, to be filled out once a week by employees, we can train a Machine Learning model for each employee, offering personalized insight into what habits minimize burnout.

We recognize that each employee has different preferences and lifestyles, so we trained a unique ML model for each employee based on their own data. When a certain employee did not have enough data (perhaps they are new to the company), we aggregated their data with randomly sampled data from other employees. As more time passes and a particular employee's data set grows, their model is trained on data that incorporates more of their own data and less of the aggregate data. This way, we can tailor each employee's suggestions better overtime, adjusting as needed.

We trained these models in three major steps:
1. Sample employee data. If there is not enough from that specific employee, randomly sample data from other employees.
2. Trained a Gradient Boosted Linear Regressor to predict a burnout score (higher burnout score = better). Features used were: EMPLOYEE ID, Hours Worked, Break Count, Break Time, Meals Eaten, Sleep, Stress, Fatigue, and Efficiency.
3. Conducted a grid search using possible values for the features to find the set of features that resulted in the highest burnout score (least burnout for the employee).

More notes on the technical implementation are detailed in the Jupyter Notebook.
