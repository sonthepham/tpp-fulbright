import { LightningElement, track } from 'lwc';

export default class FbAdmissionsApplicationMenu extends LightningElement {
    @track showEligibilityCheck = true;
    @track showProfileInformation = false;
    @track showAcademicInformation = false;
    @track showActivitiesAndAwards = false;
    @track showPersonalEssay = false;
    @track showAdditionalInformation = false;

    resetAllTab(){
        this.showEligibilityCheck = false;
        this.showProfileInformation = false;
        this.showAcademicInformation = false;
        this.showActivitiesAndAwards = false;
        this.showPersonalEssay = false;
        this.showAdditionalInformation = false;
    }

    tabselect(evt){
        this.resetAllTab();
        const idTab = evt.target.id;
        if(idTab){
            switch(idTab.split('-')[0]) {
                case 'tabEligibilityCheck':
                    this.clickTabEligibilityCheck();
                    break;
                case 'tabProfileInformation':
                    this.clickTabProfileInformation();
                    break;
                case 'tabAcademicInformation':
                    this.clickTabAcademicInformation(); 
                case 'tabPersonalEssay':
                    this.clickTabPersonalEssay();
                    break;   
                case 'tabActivitiesAndAwards':
                    this.clickTabActivitiesAndAwards();
                    break;
                case 'tabAdditionalInformation':
                    this.clickTabAdditionalInformation();
                    break;
                default:
                  console.log('tabselect not found id ${idTab}');
                  break;
            }
        }
    }

    clickTabEligibilityCheck(){
        this.showEligibilityCheck = true;
    }

    clickTabProfileInformation(){
        this.showProfileInformation = true;
    }

    clickTabAcademicInformation(){
        this.showAcademicInformation = true;
    }

    clickTabPersonalEssay(){
        this.showPersonalEssay = true;
    }
   
    clickTabActivitiesAndAwards(){
        this.showActivitiesAndAwards = true;
    }

    clickTabAdditionalInformation(){
        this.showAdditionalInformation = true;
    }

}